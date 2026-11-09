# Rachit Katariya – Portfolio (React + Tailwind, frontend only)

React (JavaScript) · Vite · Tailwind CSS 3 · Framer Motion. No backend.

```
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/ → deploy on Vercel / Netlify / GitHub Pages
```

## Edit your content: `src/data.js`
- **Projects**: the list is empty. A commented template (title, short description, skills, live demo, code link) sits above `export const projects`.
- **Banner**: add images to `public/banners/` and list them in `BANNERS`. Empty = animated terminal banner, 1 image = static, 2+ = slider every 5s.
- **Resume**: copy `.env.example` to `.env` and set `VITE_RESUME_URL` to your Google Drive link.
- Skills, experience, education, socials, blogs and GitHub username are in the same file. Skill icons are in `src/assets/skills/`.

## Features
Dark/light toggle with a circular reveal (falls back to a soft fade), Ctrl/Cmd+K command palette, live GitHub heatmap, terminal-style background in the page margins (wide screens), glowing “HIRE ME” light along the left page border, and a respect for `prefers-reduced-motion`.
