# Paparico Website

Official website for Paparico, an artisanal bakery specializing in the traditional Pernambucan bolo de rolo, handcrafted in Lisbon.

## Technologies

- Next.js 16 (App Router)
- React 19
- TypeScript
- next/font/local for custom fonts (The Seasons)
- Vercel (continuous deployment)
- ESLint + Prettier

## Features (initial version)

- Base structure for the marketing/institutional website
- Custom local fonts
- Responsive layout
- Reusable component structure
- Automatic deployments from GitHub → Vercel

## Running the Project Locally

1. Clone the repository

```bash
git clone https://github.com/<seu-usuario>/paparico-website.git
cd paparico-website
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

Access the project at: `http://localhost:3000`

## Production Build

```bash
npm run build
npm start
```

## Deployment

This project uses _Vercel_ for hosting.
Every push to the `main` branch automatically triggers a production deployment.

Manual deploy (optional):

```bash
vercel --prod
```

## Project Structure

```
src/
 ├─ app/
 │   ├─ layout.tsx
 │   ├─ page.tsx
 │   └─ globals.css
 ├─ components/
 ├─ constants/
```

## Custom Fonts

The custom font families are stored under `public/fonts/`

And loaded using `next/font/local` inside `layout.tsx`.

## Commit Message Guidelines

This project follows Conventional Commits:

Examples:

```
feat: add hero section
fix: correct navbar alignment
style: adjust global typography
chore: update dependencies
```

# About Paparico

Paparico is an artisanal bakery based in Lisbon, dedicated to preserving the traditional Pernambucan bolo de rolo, crafted with quality and affection.
Instagram: @paparico.prc
