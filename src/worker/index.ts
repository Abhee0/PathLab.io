import { Hono } from "hono";
import { serveStatic } from "hono/cloudflare-workers";

const app = new Hono<{ Bindings: Env }>();

// Serve static files from dist directory
app.use("/*", serveStatic({ root: "./" }));

// Fallback for SPA routing - serve index.html for all unmatched routes
app.get("*", serveStatic({ path: "index.html" }));

export default app;
