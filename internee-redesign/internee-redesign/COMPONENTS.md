# Components guide

All components are function components in `src/components/`. Content lives in `src/data/` (JSON and JS).

## Layout
| Component | Purpose | Props |
|---|---|---|
| `Navbar` | Sticky header, hamburger menu, dropdowns, Login/Sign Up or user name + Logout | none |
| `Footer` | Links, contact number, social icons | none |
| `SmartLink` | `<Link>` for internal paths, `<a target=_blank>` for `http(s)` URLs | `to`, any anchor props |
| `Img` | Image with text fallback if it fails to load | `src`, `alt`, `className`, `fallback` |
| `Reveal` | Fade-in on scroll | `delay` (ms), `className` |

## Sections
| Component | Purpose | Props |
|---|---|---|
| `Hero`, `Partners`, `HowItWorks`, `CTA`, `FAQ`, `ContactForm`, `Testimonials` | Homepage sections (data from `content.js`, `faqs.js`) | none |
| `TracksSection` | Tracks carousel loaded from `tracks.json` with skeleton/error states | none |
| `FeatureSection` | Heading + feature cards | `id, tag, title, text, cta, items, alt, pills, page` |
| `Sections` (default `Section`) | Renders a section defined in `content.js` | `name`, `page` |

Example: `<Section name="task" />` renders the Task Portal block.

## Reusable UI
| Component | Purpose | Props |
|---|---|---|
| `Carousel` | Arrows, dots, swipe, keyboard, autoplay | `items`, `renderItem(item)`, `label`, `autoplay` (ms, 0 = off) |
| `Skeleton` | Loading placeholders | `count` |
| `Modal` | Accessible dialog (Esc and backdrop close) | `title`, `onClose` |
| `FormCard` / `FormSection` | Validated form from config | `cfg {title, submit, fields, successMsg, auth}`, `formKey` |

Example: `<Carousel items={list} renderItem={(x) => <Card {...x} />} label="Tracks" />`

## Data boards (loaded from local JSON through `useAsyncData`)
`JobPortal` (`jobs.json`), `InternshipBoard` (`internships.json`), `BlogBoard`, `WebinarBoard`, `ProfileBoard`. `JobPortal` and `InternshipBoard` wrap `ListingBoard` (`loader`, `noun`, `searchLabel`), which provides search, category chips, skeleton, empty/error states and an apply dialog.

## Interactive demos
`MockInterview` (rule-based scoring, `evaluate(answer)`) and `CareerCoach` (template-based resume/cover letter). Neither is real AI.

## Hooks and context
- `useAsyncData(loader, delay)` returns `{ status, data, retry }`.
- `AuthProvider` / `useAuth()` returns `{ user, login, logout }` (demo only, localStorage, no passwords stored).

## Tests
`npm test` runs Vitest + React Testing Library (`src/__tests__`): Navbar, FAQ, Forms (login/signup), Job search and filters, Carousel, Hero, Footer, Testimonials, TracksSection, MockInterview, CareerCoach.
