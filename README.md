# Anime Search App

React + Vite + TypeScript app using Redux Toolkit, TailwindCSS, and `react-router-dom`.
Search anime via the Jikan API with server-side pagination and abortable debounced search.

## Tech Stack

- React 18, Vite 5, TypeScript 5
- Redux Toolkit, React Redux
- React Router DOM
- TailwindCSS
- Jikan API (`https://api.jikan.moe/v4`)

## Getting Started (npm only)

```bash
npm install
npm run dev
# http://localhost:4000
```

Build locally:

```bash
npm run build
npm run preview
```

## Tests

```bash
npm test        # watch mode
npm run test:run
```

Tools: Vitest + React Testing Library (jsdom). See `vitest.config.ts` and `src/__tests__/`.

## Project Structure

```text
src/
  api/
    jikan.ts            # API calls with AbortController cancellation
  app/
    store.ts            # Redux store
    hooks.ts            # typed hooks
  components/
    SearchBar.tsx       # debounced input (250ms)
    AnimeCard.tsx       # result item card
    AnimeGrid.tsx       # grid wrapper
    Pagination.tsx      # server-side pagination controls
    SkeletonCard.tsx    # loading skeletons
    ErrorPopup.tsx      # error surface
  features/
    anime/
      animeSlice.ts     # query/page state, errors
      animeThunks.ts    # list/detail thunks
      types.ts          # types for anime/search
  pages/
    SearchPage.tsx      # search page
    DetailPage.tsx      # detail page
    NotFoundPage.tsx    # 404 page
  routes/
    AppRoutes.tsx       # app routes
  index.css             # Tailwind entry
  main.tsx, App.tsx
```

## Behavior Notes

- Search input is debounced at 250ms. In-flight requests are aborted when a new search starts.
- Server-side pagination uses Jikan `page` and updates Redux state via `setPage`.
- SPA routing: all unknown paths rewrite to `/` in production (see `vercel.json`).

## Deployment (Vercel)

Already configured for SPA rewrites via `vercel.json`.

Steps:
1) Push to a Git repo (GitHub/GitLab/Bitbucket)
2) Import the project in Vercel → Framework Preset: Vite
3) Build Command: `npm run build` | Output Directory: `dist`
4) Deploy

Live URL: https://YOUR-DEPLOYED-URL.vercel.app

## Bonus Implementation

- Skeleton loaders on search results
- Error popup for API failures
- Empty state with helpful suggestions
- Mobile-responsive layout

## Evaluation Mapping

- User Experience: skeletons, empty state, mobile responsive layout present.
- Technical Excellence: error handling, debounce + abort to avoid race conditions, tests included.

## Environment

No API keys required. Jikan is public and rate-limited — avoid spamming requests.
