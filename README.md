# Internee.pk Redesign

A responsive, interactive frontend redesign of the Internee.pk virtual internship platform, built with React and Vite as part of a frontend development internship task.

## Features
- **Responsive UI and navigation:** mobile-first layout, hamburger menu, dropdown menus and a sticky header.
- **Interactive UI:** scroll-reveal animations, hover transitions, an internship tracks carousel (arrows, dots, swipe, keyboard), a testimonials slider and an FAQ accordion.
- **Dynamic content:** jobs, internships, blog posts, webinars and profiles load from local JSON files with skeleton loaders and error/empty states. Search and category filters included.
- **Form validation:** client-side validation for contact, login, sign-up and application forms, with clear error messages and loading/success states.
- **Demo tools:** a rule-based mock interview and a template-based resume/cover-letter generator.
- **Testing:** 27 tests across 11 files using Vitest and React Testing Library.
- **Documentation:** `COMPONENTS.md` describes every component, its props and usage.

## Tech stack
React 18, Vite, React Router, Lucide React, Vitest, React Testing Library, CSS3.

## Getting started
```bash
npm install
npm run dev      # http://localhost:5173
npm test         # run the test suite
npm run build    # production build
```

## Project structure
```
src/
  components/   reusable UI components
  pages/        Home, SectionPage, InfoPage
  data/         content.js, pages.js and local JSON data
  hooks/        useAsyncData
  context/      AuthContext (demo only)
  __tests__/    Vitest + RTL tests
```

## Notes and limitations
- Listings, blog posts, webinars, profiles and two testimonials are **sample data** for demonstration.
- Login and sign-up are **front-end demos**. There is no backend, and passwords are not stored.
- The mock interview and career coach run in the browser using simple rules and templates. They do not use AI.
- This is an educational redesign concept and is not affiliated with Internee.pk.
