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

export const fetchUserEvents = async (username, token) => {
    const headers = token ? { Authorization: `token ${token}` } : {};
    try {
        const res = await fetch(`${BASE_URL}/users/${username}/events/public?per_page=5`, { headers });
        if (!res.ok) return [];
        const events = await res.json();

        // Check for PushEvent today
        const today = new Date().toDateString();

        return events.filter(event => {
            // We only care about PushEvents for "activity" (or we could include others)
            const eventDate = new Date(event.created_at).toDateString();
            return event.type === 'PushEvent' && eventDate === today;
        });
    } catch (error) {
        // console.error(`Failed to fetch events for ${username}`);
        return [];
    }
};

export const fetchUserLocation = async (username, token) => {
    const headers = token ? { Authorization: `token ${token}` } : {};
    try {
        const res = await fetch(`${BASE_URL}/users/${username}`, { headers });
        if (!res.ok) return null;
        const user = await res.json();
        return user.location;
    } catch (error) {
        return null;
    }
};
