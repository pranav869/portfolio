# Portfolio — Pranav Eashwaran G

A personal portfolio site built with **React** and **Vite**, showcasing experience, projects, skills, and contact info.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build for production

```bash
npm run build
```

Output is in `dist/`.

## Deploy (free)

### Option A: Vercel (recommended)

1. Push this folder to a GitHub repo (e.g. `pranav869/portfolio`).
2. Go to [vercel.com](https://vercel.com) → **Add New** → **Project** → import your repo.
3. Leave **Build Command** as `npm run build` and **Output Directory** as `dist`. Click **Deploy**.
4. Your site will be live at `https://your-project.vercel.app` (you can add a custom domain in Vercel settings).

### Option B: Vercel CLI

```bash
npm i -g vercel
vercel
```

Log in when prompted, then follow the prompts. Production URL: `vercel --prod`.

### Option C: Netlify

1. Push to GitHub, then go to [netlify.com](https://netlify.com) → **Add site** → **Import from Git**.
2. Set **Build command:** `npm run build`, **Publish directory:** `dist`. Deploy.

## Customize

- **LinkedIn & GitHub:** In `src/App.jsx`, search for `linkedin.com` and `github.com` and replace with your profile URLs.
- **Favicon:** Replace `public/vite.svg` with your own favicon.
