import { serve } from "std/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

serve(async (req: Request) => {
  const { method, url } = req;
  const urlObj = new URL(url);
  console.log(
    `[${new Date().toISOString()}] Received ${method} request to ${url}`,
  );

  // Handle CORS preflight requests
  if (method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    // Attempt to get code from URL (for GET or POST with query params)
    let code = urlObj.searchParams.get("code");

    // If POST, also attempt to get code from body
    if (method === "POST") {
      const bodyText = await req.text();
      if (bodyText) {
        try {
          const body = JSON.parse(bodyText);
          code = code || body.code;
        } catch (e: any) {
          console.error("JSON parse error:", e.message);
        }
      }
    }

    if (!code) {
      return new Response(
        JSON.stringify({
          error: "Bad Request",
          details: "Missing code parameter in query or body.",
          receivedMethod: method,
          receivedUrl: url,
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    const client_id = Deno.env.get("VITE_GITHUB_CLIENT_ID") ||
      Deno.env.get("VITE_GITHUB_CLIENT_ID");
    const client_secret = Deno.env.get("GITHUB_CLIENT_SECRET");

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
        },
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
      },
    );

    const data = await tokenResponse.json();

    if (data.error) {
      return new Response(
        JSON.stringify(data),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
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
      },
    );
  } catch (error: any) {
    console.error("Auth error:", error);
    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
        details: error.message,
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});
