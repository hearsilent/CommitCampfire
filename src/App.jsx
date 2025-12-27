import { useState, useEffect, useCallback } from 'react';
import Globe3D from './components/Globe3D';
import Overlay from './components/Overlay';
import { fetchFollowing, fetchUserEvents, fetchUserLocation } from './services/github';
import { getCoordinates } from './services/geocoding';

function App() {
  const [loading, setLoading] = useState(false);
  const [pointsData, setPointsData] = useState([]);
  const [arcsData, setArcsData] = useState([]);
  const [ringsData, setRingsData] = useState([]);

  // Load initial data if credentials exist
  useEffect(() => {
    const token = localStorage.getItem('github_token');
    const username = localStorage.getItem('github_username');
    if (token && username) {
      handleSearch(username, token);
    }
  }, []);

  const handleSearch = useCallback(async (username, token) => {
    if (!username) return;
    setLoading(true);

    try {
      // 1. Get My Location
      const myLocation = await fetchUserLocation(username, token);
      const myCoords = await getCoordinates(myLocation);

      // Default to "Null Island" or generic starting point if no location found for user
      const startLat = myCoords ? myCoords.lat : 20;
      const startLng = myCoords ? myCoords.lng : 0;

      // 2. Get Following
      const following = await fetchFollowing(username, token);
      console.log(`Found ${following.length} followed users.`);

      const newPoints = [];
      const newArcs = [];
      const newRings = [];

      // Process in batches or parallel (limit parallel requests to avoid hitting rate limits too hard if no token)
      // With token, 5000 req/hr is plenty for ~50-100 users.

      const promises = following.map(async (user) => {
        // A. Get Location
        const userLocationStr = await fetchUserLocation(user.login, token);
        if (!userLocationStr) return; // No location, skip visualization

        const coords = await getCoordinates(userLocationStr);
        if (!coords) return; // precise location not found

        // Helper to add random jitter to avoid overlapping points
        const jitter = () => (Math.random() - 0.5) * 0.5;
        const lat = coords.lat + jitter();
        const lng = coords.lng + jitter();

        // B. Check Activity (today)
        const events = await fetchUserEvents(user.login, token);
        const hasPushToday = events.length > 0;

        // Add to Points (All followed users with location)
        newPoints.push({
          lat,
          lng,
          size: 0.5,
          color: hasPushToday ? '#ff4081' : '#a0a0a0', // Pink if active, Grey if not
          name: user.login,
          avatarUrl: user.avatar_url
        });

        // Add to Arcs/Rings (Active users)
        if (hasPushToday) {
          newArcs.push({
            startLat,
            startLng,
            endLat: lat,
            endLng: lng,
            color: '#ff4081'
          });

          newRings.push({
            lat,
            lng,
            maxRadius: 5,
            propagationSpeed: 2,
            repeatPeriod: 1000
          });
        }
      });

      await Promise.all(promises);

      setPointsData(newPoints);
      setArcsData(newArcs);
      setRingsData(newRings); // Rings for active users

    } catch (error) {
      console.error("Error during visualization update:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', backgroundColor: 'black', overflow: 'hidden' }}>
      {/* 3D Layer */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
        <Globe3D
          pointsData={pointsData}
          arcsData={arcsData}
          ringsData={ringsData}
        />
      </div>

      {/* UI Layer */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 50, pointerEvents: 'none' }}>
        <Overlay
          onSearch={handleSearch}
          isLoading={loading}
        />
      </div>
    </div>
  );
}

export default App;
