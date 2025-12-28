/**
 * Cloudflare Worker for RentRant Blog
 * Proxies requests from rentrant.nz/blog/* to rentrantakl-dot.github.io/rentrant-blog/*
 */

export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);

        // Only handle requests starting with /blog
        if (url.pathname.startsWith('/blog')) {



            // Configure the target origin
            const ORIGIN_HOST = 'rentrantakl-dot.github.io';
            const ORIGIN_PATH_PREFIX = '/rentrant-blog';

            // Calculate the new path
            // e.g. /blog/post-1 -> /rentrant-blog/post-1
            let newPath = url.pathname.replace(/^\/blog/, ORIGIN_PATH_PREFIX);

            // Ensure trailing slash for root to avoid 404 on some servers or infinite redirects
            if (newPath === ORIGIN_PATH_PREFIX) {
                newPath = `${ORIGIN_PATH_PREFIX}/`;
            }

            // Construct the new URL
            const targetUrl = `https://${ORIGIN_HOST}${newPath}${url.search}`;

            // Create a modified request
            const modifiedRequest = new Request(targetUrl, {
                method: request.method,
                headers: request.headers,
                body: request.body,
                redirect: 'manual' // Let the worker handle redirects if needed
            });

            // KEY FIX: GitHub Pages requires the Host header to match the custom domain or github.io domain
            modifiedRequest.headers.set('Host', ORIGIN_HOST);

            // KEY FIX: GitHub blocks requests with empty User-Agent
            modifiedRequest.headers.set('User-Agent', 'Cloudflare-Worker-Proxy');

            // Remove headers that might confuse the origin
            modifiedRequest.headers.delete('Referer');

            try {
                const response = await fetch(modifiedRequest);

                // Check for 404 from GitHub
                if (response.status === 404) {
                    console.log(`GitHub 404 for: ${targetUrl}`);
                    return new Response(`Blog post not found on GitHub origin. Target: ${targetUrl}`, { status: 404 });
                }

                return response;
            } catch (e) {
                return new Response('Error fetching from blog origin: ' + e.message, { status: 500 });
            }
        }

        // Fallback for non-blog requests (if this worker is on the main domain)
        // In a full app setup, you'd usually have this worker purely for the route or 
        // fetch from the main app origin here.
        return fetch(request);
    }
};
