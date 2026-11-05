const http = require("node:http");

const host = "0.0.0.0";
const port = Number(process.env.PORT) || 3000;

function requestHandler(req, res) {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok" }));
    return;
  }

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>CSCE 331 Render Demo</title>
    <style>
      :root { color-scheme: dark; font-family: system-ui, sans-serif; }
      body { min-height: 100vh; margin: 0; display: grid; place-items: center; background: #111827; color: #f9fafb; }
      main { width: min(90%, 42rem); padding: 3rem; text-align: center; border: 1px solid #374151; border-radius: 1rem; background: #1f2937; box-shadow: 0 1rem 3rem #0005; }
      h1 { margin-top: 0; color: #60a5fa; }
      code { padding: .2rem .4rem; border-radius: .3rem; background: #111827; }
    </style>
  </head>
  <body>
    <main>
      <h1>Deployment successful 🚀</h1>
      <p>This Node.js app is running in the cloud on Render.</p>
      <p>Health check: <a href="/health"><code>/health</code></a></p>
    </main>
  </body>
</html>`);
    return;
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Not found" }));
}

function createServer() {
  return http.createServer(requestHandler);
}

if (require.main === module) {
  createServer().listen(port, host, () => {
    console.log(`Server listening on http://${host}:${port}`);
  });
}

module.exports = { createServer, requestHandler };
