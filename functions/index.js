export default {
    async fetch(request, env, ctx) {
        const corsHeaders = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
        };

        const { method, url } = request;
        const urlObj = new URL(url);

        // Handle CORS preflight requests
        if (method === "OPTIONS") {
            return new Response("ok", { headers: corsHeaders });
        }

        try {
            let code = urlObj.searchParams.get("code");

            if (method === "POST") {
                const bodyText = await request.text();
                if (bodyText) {
                    try {
                        const body = JSON.parse(bodyText);
                        code = code || body.code;
                    } catch (e) {
                        console.error("JSON parse error:", e.message);
                    }
                }
            }

            if (!code) {
                return new Response(
                    JSON.stringify({
                        error: "Bad Request",
                        details: "Missing code parameter in query or body.",
                    }),
                    {
                        status: 400,
                        headers: { ...corsHeaders, "Content-Type": "application/json" },
                    }
                );
            }

            const client_id = env.GITHUB_CLIENT_ID;
            const client_secret = env.GITHUB_CLIENT_SECRET;

            if (!client_id || !client_secret) {
                console.error("Missing environment variables");
                return new Response(
                    JSON.stringify({
                        error: "Internal Server Error",
                        details: "Server configuration missing.",
                    }),
                    {
                        status: 500,
                        headers: { ...corsHeaders, "Content-Type": "application/json" },
                    }
                );
            }

            const tokenResponse = await fetch(
                "https://github.com/login/oauth/access_token",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        client_id,
                        client_secret,
                        code,
                    }),
                }
            );

            const data = await tokenResponse.json();

            if (data.error) {
                return new Response(
                    JSON.stringify(data),
                    {
                        status: 400,
                        headers: { ...corsHeaders, "Content-Type": "application/json" },
                    }
                );
            }

            // Fetch user profile to get login name
            const userResponse = await fetch("https://api.github.com/user", {
                headers: {
                    Authorization: `Bearer ${data.access_token}`,
                    Accept: "application/json",
                    "User-Agent": "CommitCampfire",
                },
            });

            const userData = await userResponse.json();

            return new Response(
                JSON.stringify({
                    ...data,
                    login: userData.login,
                }),
                {
                    status: 200,
                    headers: { ...corsHeaders, "Content-Type": "application/json" },
                }
            );
        } catch (error) {
            console.error("Auth error:", error);
            return new Response(
                JSON.stringify({
                    error: "Internal Server Error",
                    details: error.message,
                }),
                {
                    status: 500,
                    headers: { ...corsHeaders, "Content-Type": "application/json" },
                }
            );
        }
    },
};
