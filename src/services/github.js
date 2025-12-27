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

export const fetchUserCommits = async (username, token) => {
    const headers = {
        'Accept': 'application/vnd.github.cloak-preview+json',
        ...(token ? { Authorization: `token ${token}` } : {})
    };

    try {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const today = `${year}-${month}-${day}`;

        const query = `author:${username} committer-date:${today}`;
        const url = `${BASE_URL}/search/commits?q=${encodeURIComponent(query).replace(/%20/g, '+')}`;

        const res = await fetch(url, { headers });

        if (res.status === 403) {
            console.warn(`Rate limit hit or forbidden access for ${username}. Search API has strict limits (30/min for auth, 10/min for unauth).`);
            return 0;
        }

        if (!res.ok) return 0;

        const data = await res.json();
        return data.total_count || 0;
    } catch (error) {
        return 0;
    }
};
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
