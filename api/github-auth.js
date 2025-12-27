export default async function handler(request, response) {
    const { code } = request.body || request.query;

    if (!code) {
        return response.status(400).json({ error: 'Missing code parameter' });
    }

    try {
        const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                client_id: process.env.VITE_GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code,
            }),
        });

        const data = await tokenResponse.json();

        if (data.error) {
            return response.status(400).json(data);
        }

        // Fetch user profile to get login name
        const userResponse = await fetch('https://api.github.com/user', {
            headers: {
                Authorization: `Bearer ${data.access_token}`,
                Accept: 'application/json',
                'User-Agent': 'CommitCampfire'
            }
        });

        const userData = await userResponse.json();

        return response.status(200).json({
            ...data,
            login: userData.login
        });
    } catch (error) {
        console.error('Auth error:', error);
        return response.status(500).json({ error: 'Internal Server Error' });
    }
}
