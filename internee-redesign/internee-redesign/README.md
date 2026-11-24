# Internee.pk Redesign (React + Vite + React Router)

Redesign of https://www.internee.pk/ built from the live homepage content.

## Run
Node.js 18+ required.

    npm install
    npm run dev       # http://localhost:5173
    npm run build && npm run preview

## Routes
`/` Home, `/task-portal`, `/instructors`, `/career-growth`, `/ai-interview`, `/ai-career-coach`, plus a 404 page.
Homepage anchors (`/#internships`, `/#how`, `/#faq`, `/#contact`) scroll smoothly, also from other pages.

## Homepage checklist (order follows the live site)
Header + dropdown nav, Hero, Partner logos, Internship tracks (searchable), Task Portal, Instructor Portal, Professional Development (stats, learning journey, resources), AI Mock Interview, How It Works, AI Career Coach, Testimonial slider, Final CTA, FAQ, Contact form, Footer.

## Testing

    npm test

## Structure
- `src/data/content.js`: all text, links, nav, partners, section data (edit content here)
- `src/components/`: Navbar, Hero, Partners, InternshipCategories, FeatureSection, Sections, HowItWorks, Testimonials, CTA, FAQ, ContactForm, Footer, Reveal, SmartLink, Img
- `src/pages/`: Home, SectionPage
- `src/index.css`: styles

## Pages (all internal, no links to internee.pk except the logo/partner image files)
Home, Task Portal, Instructor Portal, Career Growth, AI Mock Interview, AI Career Coach, Internship, Graduate Program, Student Ambassador, Startup Journey, Partner With Us, About, Intern Profiles, Blog, Webinars, Job Portal, Sign in, Sign up, Apply as instructor, Terms, Privacy.
Page content lives in `src/data/pages.js` (forms and text) and `src/data/content.js`.

## Honest limitations
- Only the homepage of internee.pk could be read; other pages are original draft pages built from it. Replace wording in `src/data/` as needed.
- Jobs, internships, blog posts, webinars and profiles are clearly labelled SAMPLE data in local JSON files. They are not real openings.
- Login/Sign up are demos: they show success messages and remember the name locally; no server, no password storage.
- Two extra testimonials are labelled SAMPLE so the slider is visible; replace them with real ones in `src/data/content.js`.
- Mock interview and career coach are rule/template based, not real AI.
- Logo and partner logos load from internee.pk (text fallback if blocked).
- Not built or run in the authoring environment (no network). Run `npm install`, `npm run dev` and `npm test`, and report any error.

See `COMPONENTS.md` for the component guide.
