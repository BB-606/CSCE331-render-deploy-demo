# CSCE 331 Render Deployment Demo

A minimal Node.js web service for demonstrating a cloud deployment on Render. It uses only Node's built-in modules, so there are no third-party runtime dependencies.

## Run locally

You need Node.js 20 or newer.

```bash
npm start
```

Open <http://localhost:3000>. The health endpoint is at <http://localhost:3000/health>.

Run the tests with:

```bash
npm test
```

## Deploy to Render

1. Push these files to the GitHub repository `CSCE331-render-deploy-demo`.
2. In the Render dashboard, choose **New > Blueprint**.
3. Connect GitHub if prompted and select the repository.
4. Render will read `render.yaml`; review the settings and choose **Deploy Blueprint**.
5. Open the generated `onrender.com` URL after the deploy finishes.

Every later push to the selected branch will trigger a new deployment by default.

## Manual setup alternative

If you create a **Web Service** instead of a Blueprint, use:

- Runtime: `Node`
- Build command: `npm install`
- Start command: `npm start`
- Health check path: `/health`
