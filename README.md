# Corentix Labs — Website

Dark, space-themed marketing site built with React + Vite and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

The production files are written to `dist/`. Upload the contents of `dist/`
to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages, etc.).

## What's inside

- `src/components/Starfield.jsx` — fixed canvas starfield with twinkle + scroll
  parallax, rendered behind the entire site.
- `src/components/Preloader.jsx` — the "Hi :)" intro screen shown on first load.
- `src/components/Hero.jsx` — 3D, mouse-reactive hero scene (CSS 3D transforms,
  no WebGL dependency, so it's fast and lightweight).
- `src/components/CompanyName.jsx` — the scroll-triggered "CORENTIX" letter
  reveal with each letter's meaning.
- `src/components/WhatWeDo.jsx`, `Projects.jsx`, `Innovation.jsx`,
  `Process.jsx`, `Testimonials.jsx`, `WhyUs.jsx`, `Contact.jsx`, `Footer.jsx`
  — the remaining sections, in page order.

## Notes & things to personalize

- Update the contact email in `Contact.jsx` and `Footer.jsx`.
- The "Confidential —" project cards are placeholders since live URLs are
  under NDA per your brief — swap in real names/screenshots any time.
- The two patent cards in `Innovation.jsx` use placeholder application
  numbers and descriptions — replace with your actual filing details.
- The contact form currently only shows a success state in the UI; wire the
  `onSubmit` handler in `Contact.jsx` to your email service (Formspree,
  Resend, etc.) or a backend endpoint to actually send messages.
- Fonts (Space Grotesk, Inter, JetBrains Mono) load from Google Fonts —
  self-host them if you need to work fully offline.
