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

            // console.log(`Proxying ${url.pathname} to ${targetUrl}`);

            // Create a modified request
            const modifiedRequest = new Request(targetUrl, {
                method: request.method,
                headers: request.headers,
                body: request.body,
                redirect: 'follow'
            });

            // Set the proper Host header for GitHub Pages
            modifiedRequest.headers.set('Host', ORIGIN_HOST);

            try {
                const response = await fetch(modifiedRequest);

                // If GitHub returns a 404, we might want to serve a custom 404 or just forward it
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
