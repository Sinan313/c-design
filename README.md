# C-DESIGN

Website for **C-DESIGN: Design. Develop. Deliver.**, an independent web design and development studio.

Stack: Next.js (App Router) · TypeScript (strict) · Tailwind CSS v4 · Lucide · Framer Motion · React Hook Form + Zod · Vercel.

## Quick start

```bash
npm install
cp .env.example .env.local   # then fill in your values
npm run dev                  # http://localhost:3000
```

Other scripts: `npm run typecheck`, `npm run build`, `npm start`.

## Where to edit things

| What | File |
| --- | --- |
| Founder profile, education, expertise, contact details, budget/timeline options, testimonials | `lib/site.ts` (contact values can be overridden by env vars) |
| Services, "Why C-DESIGN", process steps | `lib/services.ts` |
| Portfolio projects | `lib/projects.ts` |
| Colors and fonts | `app/globals.css` |

Anything left empty (WhatsApp, Instagram, LinkedIn, portfolio, location) is **hidden**, so there are no dead links.

### Projects
Add, edit or remove entries in `lib/projects.ts`. Detail pages, the sitemap and static routes update automatically. The three starter projects are **self-initiated concepts** (`concept: true`) and are labelled as such. To show a real screenshot, put it in `public/images/` and set the project's `image` field. Never add invented clients or results.

### Testimonials
`testimonials` in `lib/site.ts` is empty, so the site shows an honest "no testimonials yet" note. Add genuine, permitted feedback there and the cards appear.

## Environment variables

| Variable | Scope | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | public | Production URL (canonical links, sitemap, Open Graph) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | public | Email shown on the site |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | public | Digits with country code, e.g. `15551234567` |
| `NEXT_PUBLIC_INSTAGRAM_URL`, `NEXT_PUBLIC_LINKEDIN_URL` | public | Social links |
| `NEXT_PUBLIC_PORTFOLIO_URL`, `NEXT_PUBLIC_LOCATION` | public | Optional overrides for the portfolio link and location |

No secret keys are needed. Do not commit real `.env` files.

## Contact form

The form validates input in the browser (React Hook Form + Zod). **Send via WhatsApp** opens `wa.me` with the enquiry prefilled for the number in `lib/site.ts`; the visitor presses send in WhatsApp. Nothing is stored on a server and no API keys are required. The business email stays available as a contact link in the Contact section and footer.

## Deploy to Vercel

1. Push the repo to GitHub.
2. Import it at vercel.com/new (framework is auto-detected).
3. Add the public environment variables above in Project Settings → Environment Variables (optional, since defaults live in `lib/site.ts`).
4. Deploy, then add your custom domain and set `NEXT_PUBLIC_SITE_URL` to it (redeploy afterwards).

## Before going live

Add Instagram/LinkedIn links when you have them, swap concept projects for real work and screenshots as you complete it, test the WhatsApp enquiry button.
