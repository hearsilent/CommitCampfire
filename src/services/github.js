const BASE_URL = 'https://api.github.com';

export const fetchFollowing = async (username, token) => {
    const users = [];
    let page = 1;
    const headers = token ? { Authorization: `token ${token}` } : {};

    // Limit to first 100 for now to avoid long wait times
    try {
        const res = await fetch(`${BASE_URL}/users/${username}/following?per_page=100&page=${page}`, { headers });
        if (!res.ok) throw new Error('Failed to fetch following');
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const fetchUserCommitsGraphQL = async (username, token, from, to) => {
    if (!token) return 0;

    const query = `
      query($login: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $login) {
          contributionsCollection(from: $from, to: $to) {
            totalCommitContributions
          }
        }
      }
    `;

    try {
        const res = await fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
                'Authorization': `bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query,
                variables: { login: username, from, to }
            })
        });

        if (!res.ok) return 0;
        const data = await res.json();
        return data.data?.user?.contributionsCollection?.totalCommitContributions || 0;
    } catch (error) {
        console.error('GraphQL Fetch Error:', error);
        return 0;
    }
};

export const fetchUserCommits = async (username, token) => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const today = `${year}-${month}-${day}`;

    // Set from/to for GraphQL - start of today to now
    const from = `${today}T00:00:00Z`;
    const to = now.toISOString();

    // If we have a token, default to GraphQL
    if (token) {
        try {
            const count = await fetchUserCommitsGraphQL(username, token, from, to);
            return count;
        } catch (error) {
            console.warn(`GraphQL fetch failed for ${username}, falling back to REST:`, error);
        }
    }

    // Fallback to REST Search API (or if no token)
    const headers = {
        'Accept': 'application/vnd.github.cloak-preview+json',
        ...(token ? { Authorization: `token ${token}` } : {})
    };

    try {
        const query = `author:${username} committer-date:${today}`;
        const url = `${BASE_URL}/search/commits?q=${encodeURIComponent(query).replace(/%20/g, '+')}`;

        const res = await fetch(url, { headers });
        if (!res.ok) return 0;

        const data = await res.json();
        return data.total_count || 0;
    } catch (error) {
        return 0;
    }
};

const LOCATION_CACHE_KEY = 'github_location_cache';

let locationCache = null;

const getCache = () => {
    if (locationCache) return locationCache;
    try {
        const cached = localStorage.getItem(LOCATION_CACHE_KEY);
        locationCache = cached ? JSON.parse(cached) : {};
    } catch (e) {
        locationCache = {};
    }
    return locationCache;
};

const persistCache = () => {
    try {
        localStorage.setItem(LOCATION_CACHE_KEY, JSON.stringify(locationCache));
    } catch (e) {
        console.error('Failed to save location cache to localStorage', e);
    }
};

const FALLBACK_LOCATIONS = [
    "New York, USA", "London, UK", "Tokyo, Japan", "Paris, France", "Berlin, Germany",
    "Sydney, Australia", "Toronto, Canada", "San Francisco, USA", "Singapore",
    "Seoul, South Korea", "Mumbai, India", "Cape Town, South Africa", "Sao Paulo, Brazil",
    "Mexico City, Mexico", "Bangkok, Thailand", "Amsterdam, Netherlands", "Stockholm, Sweden",
    "Vienna, Austria", "Madrid, Spain", "Rome, Italy", "Taipei, Taiwan", "Hong Kong",
    "Shanghai, China", "Dubai, UAE", "Moscow, Russia", "Istanbul, Turkey"
];

const getRandomLocation = (username) => {
    const loc = FALLBACK_LOCATIONS[Math.floor(Math.random() * FALLBACK_LOCATIONS.length)];
    console.log(`[LocationFallback] Assigned random location "${loc}" to user "${username || 'unknown'}"`);
    return loc;
};

export const fetchUserLocation = async (username, token) => {
    const cache = getCache();
    if (cache[username]) {
        return cache[username];
    }

    const headers = token ? { Authorization: `token ${token}` } : {};
    try {
        const res = await fetch(`${BASE_URL}/users/${username}`, { headers });
        if (!res.ok) return getRandomLocation(username);
        const user = await res.json();

        const location = user.location || getRandomLocation(username);

        // Update cache and persist
        cache[username] = location;
        persistCache();

        return location;
    } catch (error) {
        return getRandomLocation(username);
    }
};
