// Simple caching mechanism
const cache = new Map();

const RANDOM_CITIES = [
    { name: 'Tokyo', lat: 35.6895, lng: 139.6917 },
    { name: 'New York', lat: 40.7128, lng: -74.0060 },
    { name: 'London', lat: 51.5074, lng: -0.1278 },
    { name: 'Paris', lat: 48.8566, lng: 2.3522 },
    { name: 'Seoul', lat: 37.5665, lng: 126.9780 },
    { name: 'Singapore', lat: 1.3521, lng: 103.8198 },
    { name: 'Sydney', lat: -33.8688, lng: 151.2093 },
    { name: 'Berlin', lat: 52.5200, lng: 13.4050 },
    { name: 'Toronto', lat: 43.6532, lng: -79.3832 },
    { name: 'San Francisco', lat: 37.7749, lng: -122.4194 },
    { name: 'Mumbai', lat: 19.0760, lng: 72.8777 },
    { name: 'Dubai', lat: 25.2048, lng: 55.2708 },
    { name: 'Sao Paulo', lat: -23.5505, lng: -46.6333 },
    { name: 'Istanbul', lat: 41.0082, lng: 28.9784 },
    { name: 'Amsterdam', lat: 52.3676, lng: 4.9041 },
    { name: 'Bangkok', lat: 13.7563, lng: 100.5018 },
    { name: 'Taipei', lat: 25.0330, lng: 121.5654 },
    { name: 'Stockholm', lat: 59.3293, lng: 18.0686 },
    { name: 'Barcelona', lat: 41.3851, lng: 2.1734 },
    { name: 'Vancouver', lat: 49.2827, lng: -123.1207 }
];

let shuffledCities = [];

const getRandomCityCoords = () => {
    if (shuffledCities.length === 0) {
        shuffledCities = [...RANDOM_CITIES];
        // Fisher-Yates shuffle
        for (let i = shuffledCities.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledCities[i], shuffledCities[j]] = [shuffledCities[j], shuffledCities[i]];
        }
    }
    const city = shuffledCities.pop();
    return { lat: city.lat, lng: city.lng };
};

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

    return getRandomCityCoords();
};
