# Ahmer Liaqat – Portfolio

React + Vite portfolio. Dark theme by default, with a light/dark toggle.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:5173

## Edit content
All text (projects, experience, skills, links) is in `src/data.js`.
Styles are in `src/index.css`.

## Deploy to Netlify
**Option A – Git (recommended)**
1. Push this folder to a GitHub repository.
2. In Netlify: *Add new site → Import an existing project → GitHub* and pick the repo.
3. Netlify reads `netlify.toml` automatically (build command `npm run build`, publish folder `dist`). Click **Deploy**.

**Option B – Drag and drop**
1. Run `npm install` then `npm run build`.
2. Drag the generated `dist` folder onto https://app.netlify.com/drop
