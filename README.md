# Paparico Website

Official website for Paparico, an artisanal bakery specializing in the traditional Pernambucan bolo de rolo, handcrafted in Lisbon.

## Technologies

- Next.js 16 (App Router)
- React 19
- TypeScript
- next/font/local for custom fonts (The Seasons)
- Vercel (continuous deployment)
- ESLint + Prettier

## Features

- Marketing/institutional site for Paparico with localized routing
- Language-aware pages under `/[lang]` (Portuguese + English) powered by a `LanguageProvider`
- Middleware redirect that sends language-less paths (e.g., `/`, `/eventos`) to `/pt/...`
- Custom local fonts (The Seasons) loaded via `next/font/local`
- Responsive layout with reusable component structure
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

### Environment variables

Create a `.env.local` file and set the email credentials used by the reseller form:

```
RESEND_API_KEY=...
RESEND_FROM_EMAIL=notifications@yourdomain.com
RESEND_TO_EMAIL=owner@yourdomain.com
```

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
middleware.ts                # Adds default-language redirect to /pt
src/
 ├─ app/
 │   ├─ layout.tsx           # Global fonts + metadata (lang set by LanguageProvider)
 │   ├─ [lang]/              # All routed pages live under a language segment
 │   │   ├─ layout.tsx       # Resolves lang param and provides LanguageProvider
 │   │   ├─ page.tsx         # Home (uses translations + language context)
 │   │   ├─ page.module.css
 │   │   ├─ eventos/
 │   │   └─ menu-de-natal/
 │   └─ globals.css
 ├─ components/              # Header, Footer, GridItem, HeroHeader, etc.
 ├─ constants/               # Shared constants (e.g., WhatsApp URL)
 ├─ data/                    # Content sources (menu items, reviews)
 └─ i18n/
     ├─ LanguageProvider.tsx # Context + hooks for language and translations
     └─ translations.tsx     # Translation dictionaries (pt/en)
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
