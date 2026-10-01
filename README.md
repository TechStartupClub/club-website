# Tech Startup Club website

The public site for Tech Startup Club at UW Tacoma. It is a single page that explains the club and sends visitors to the Discord.

Built with Next.js (App Router), React, TypeScript, and Tailwind CSS v4. The app lives in [`club-website/`](club-website).

## Run it locally

```bash
cd club-website
npm ci
npm run dev
```

Then open http://localhost:3000.

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Updating content

All of the copy and data is in [`club-website/src/lib/site.ts`](club-website/src/lib/site.ts):

- `DISCORD_INVITE_CODE`: the invite every "Join the Discord" button uses.
- `MEMBERS`: the member spotlight. Each card shows the member's initials, role, and company; a `quote` is optional.
- `MEMBER_COMPANIES`: the "Members now at" bar.
- `PROJECTS`, `PILLARS`, `JOIN_STEPS`, `FAQ`: the other sections.

The member count shown on the page is read from Discord's invite API and refreshed hourly. If that request fails, the count is left out.

## Workflow

Work on `dev` (or a branch off it) and open a pull request into `main`.
