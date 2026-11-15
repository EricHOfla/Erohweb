# EROH Technology Ltd

A modern, backend-ready company website built with Next.js App Router, React and TypeScript.

## Run locally

- Node.js 20.9+
- `npm install`
- `npm run dev`

Open http://localhost:3000.

## Commands

- `npm run dev` — development server
- `npm run typecheck` — TypeScript validation
- `npm run build` — production build
- `npm start` — production server

## Architecture

- `src/app` — routes, layouts and metadata
- `src/components` — shared navigation and interactive components
- `src/data` — typed static content, ready to replace with API/database access
- `public/images` — existing company and portfolio imagery

## Static-first today, backend-ready tomorrow

This version intentionally has no database, API routes, authentication, payment processing or server-side form submission. Content is maintained in typed data modules. The contact form validates in the browser and prepares an email in the visitor's mail application; it does not store or send enquiries through this website.

When a backend is introduced, connect the existing form to a server action or API route, replace static data modules with server-side data access, and add authentication only where required. Keep private keys in server-only environment variables.

## Deployment

Deploy to Vercel using the default Next.js settings and Node.js 20.9+. The content pages are statically rendered where possible while preserving the Next.js runtime for future server functionality.

## Before publishing

Verify the company phone/email, team details, social profiles, portfolio descriptions and legal drafts. Concept projects are labelled clearly and should not be presented as completed client work.
