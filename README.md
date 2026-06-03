# Fame College International School — Landing Page

Nuxt 4 marketing site with Tailwind CSS v4, self-hosted Satoshi, Times New Roman (system serif), and Lucide icons.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Application form (Google Sheets + email)

The contact form submits to a [Google Apps Script](./scripts/google-apps-script/) web app that saves rows to a Google Sheet and sends confirmation + admin notification emails.

1. Copy `.env.example` to `.env` and fill in the values.
2. Follow [scripts/google-apps-script/README.md](./scripts/google-apps-script/README.md) to deploy the script and run `setupSheet()` once.

Required env vars:

- `NUXT_PUBLIC_APPLICATION_FORM_URL` — deployed web app `/exec` URL
- `NUXT_PUBLIC_APPLICATION_FORM_SECRET` — must match `FORM_SECRET` in `Code.gs`

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run preview` — preview production build

## Structure

- `app/components/sections/` — page sections (navbar, hero, about, programs, etc.)
- `app/components/shared/` — `SectionEyebrow`, `AppButton`, `FeatureCard`
- `app/data/` — site copy, teachers, programs, testimonials
- `scripts/google-apps-script/` — application form handler for Google Sheets + email
- `public/fonts/satoshi/` — self-hosted Satoshi (Fontshare license)

Replace Unsplash placeholder URLs in section components with final photography when available.
