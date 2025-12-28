import { useState, useEffect, useCallback, useRef } from 'react';
import Globe3D from './components/Globe3D';
import Overlay from './components/Overlay';
import { fetchFollowing, fetchUserCommits, fetchUserLocation } from './services/github';
import { getCoordinates } from './services/geocoding';

function App() {
  const [loading, setLoading] = useState(false);
  const [pointsData, setPointsData] = useState([]);
  const [arcsData, setArcsData] = useState([]);
  const [commitArcs, setCommitArcs] = useState([]);
  const [ringsData, setRingsData] = useState([]);
  const [processedCount, setProcessedCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const hasInitialized = useRef(false);

  // Load initial data if credentials exist
  useEffect(() => {
    if (hasInitialized.current) return;
    hasInitialized.current = true;

    const token = localStorage.getItem('github_token');
    const username = localStorage.getItem('github_username');
    if (token && username) {
      handleSearch(username, token);
    }
  }, []);

  const handleSearch = useCallback(async (username, token) => {
    if (!username) return;
    setLoading(true);
    setProcessedCount(0);
    setTotalCount(0);

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

      setPointsData([]);
      setArcsData([]);
      setCommitArcs([]);
      setRingsData([]);
      setTotalCount(following.length);

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
        const commitCount = await fetchUserCommits(user.login, token);
        const hasPushToday = commitCount > 0;

        // Add to Points (All followed users with location)
        setPointsData(prev => [...prev, {
          lat,
          lng,
          size: 0.5,
          color: hasPushToday ? '#6bc46d' : '#1b4721', // Green if active, Dark Green if not
          name: user.login,
          avatarUrl: user.avatar_url
        }]);

        // Add to Arcs/Rings/Commit Spheres (Active users)
        if (hasPushToday) {
          const arc = {
            startLat: lat,
            startLng: lng,
            endLat: startLat,
            endLng: startLng,
            color: '#ff5c00'
          };

          setArcsData(prev => [...prev, arc]);

          // Animated spheres running on the arc
          setCommitArcs(prev => [...prev, {
            ...arc,
            ballCount: Math.min(commitCount, 5), // number of light balls
            speed: 0.00015 + Math.random() * 0.0001
          }]);

          setRingsData(prev => [...prev, {
            lat,
            lng,
            maxRadius: 5,
            propagationSpeed: 2,
            repeatPeriod: 1000
          }]);
        }
        setProcessedCount(prev => prev + 1);
      });

      await Promise.all(promises);

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
          commitArcs={commitArcs}
          ringsData={ringsData}
        />
      </div>

      {/* UI Layer */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 50, pointerEvents: 'none' }}>
        <Overlay
          onSearch={handleSearch}
          isLoading={loading}
          processedCount={processedCount}
          totalCount={totalCount}
        />
      </div>
    </div>
  );
}

export default App;
