PROMPTS

1. **Prompt**: "Generate a React + Vite + TypeScript project structure with Redux Toolkit, TailwindCSS, Anime search using Jikan API, with server-side pagination and abortable debounced search. Add react-router-dom for navigation."
   - **Used for**: Initial project scaffolding, folder structure, and base components.

2. **Prompt**: "Explain how to cache detail pages in Redux so we don’t refetch on back navigation."
   - **Used for**: Detail page caching logic in `animeSlice.ts`.
   
3. **Prompt**: "Create Tailwind skeleton loaders for card grid."
   - **Used for**: `SkeletonCard.tsx`.

4. **Prompt**: "Integrate React Router DOM and define base routes for Search and Detail pages."
   - **Used for**: Routing via `AppRoutes.tsx`, `SearchPage.tsx`, `DetailPage.tsx`, `NotFoundPage.tsx`.

5. **Prompt**: "Configure Vercel deployment for SPA (rewrites) and update README to be npm-only with dev server on port 4000."
   - **Used for**: `vercel.json` rewrite rule, README corrections (npm-only, port 4000, deployment steps).

6. **Prompt**: "Set up Vitest and React Testing Library and add tests for Pagination, Error handling, and debounced Search behavior."
   - **Used for**: Testing toolchain (`vitest.config.ts`, `setupTests.ts`), tests in `src/__tests__/`.

7. **Prompt**: "Resolve Vite/Vitest config type conflicts by separating test configuration into vitest.config.ts."
   - **Used for**: Moving `test` block from `vite.config.ts` to `vitest.config.ts`.

8. **Prompt**: "Suppress user-facing errors when requests are intentionally aborted during debounced searches."
   - **Used for**: Handling `action.meta.aborted` in `animeSlice.ts` rejected cases.

9. **Prompt**: "Remove inline comments from source files to produce a clean submission."
   - **Used for**: Comment cleanup across `features`, `components`, and tests.

10. **Prompt**: "Update README with Tests section, Evaluation mapping, and deployment live URL placeholder."
    - **Used for**: README enhancements (tests commands, UX/technical coverage, live URL).
