# gilbertgyanaddai.com — Portfolio v2

Personal portfolio of **Gilbert Addai Gyan**, full-stack software engineer.

**Stack:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · lucide-react

## Editing content

All content lives in `src/data/`:

| File | What it holds |
|---|---|
| `personal.ts` | Name, title, tagline, email, social links |
| `experience.ts` | Work history |
| `projects.ts` | Featured projects and the `/archive` table |
| `navigation.ts` | Section nav links |

Client projects are private codebases, so they're listed without GitHub links.

## Running locally

```bash
npm install
npm run dev        # Windows (reads PORT from .env)
npm run dev:unix   # macOS/Linux
```

## Production

```bash
npm run build      # standalone build (copies public/ into .next/standalone)
npm start          # serves on port 3001
```

Layout inspired by [Brittany Chiang](https://brittanychiang.com).
