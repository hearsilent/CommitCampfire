// Simple caching mechanism
const cache = new Map();

export const getCoordinates = async (location) => {
    if (!location) return null;

    // Normalize location string
    const key = location.toLowerCase().trim();
    if (cache.has(key)) return cache.get(key);

    try {
        // Use OpenStreetMap Nominatim API (Free, but requires User-Agent)
        const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}&limit=1`, {
            headers: {
                'User-Agent': 'CommitCampfire'
            }
        });

        if (!res.ok) throw new Error('Geocoding failed');
        const data = await res.json();

        if (data && data.length > 0) {
            const coords = {
                lat: parseFloat(data[0].lat),
                lng: parseFloat(data[0].lon)
            };
            cache.set(key, coords);
            return coords;
        }
    } catch (error) {
        console.warn(`Could not geocode location: ${location}`, error);
    }

    return null;
};
