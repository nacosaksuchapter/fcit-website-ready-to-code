# FCIT AKSU Website

The official frontend for the **Faculty of Computing and Information Technology**,
Akwa Ibom State University. Built with TanStack Start (React) + Tailwind CSS v4.

This is a **static, frontend-only** site — there is no backend or database.

---

## Quick start

```bash
bun install      # install dependencies
bun run dev      # start the local dev server
bun run build    # create a production build
```

---

## How the project is organised

Everything lives in `src/`. Here is what each folder is for:

| Folder | What goes here |
| ------ | -------------- |
| `src/routes/` | One file = one page. The URL matches the filename (e.g. `about.tsx` → `/about`). |
| `src/components/` | Reusable building blocks shared across pages (`Header`, `Footer`, `PageHeader`). |
| `src/components/ui/` | Pre-built shadcn UI primitives (buttons, cards, dialogs…). Avoid editing these directly. |
| `src/data/` | **All site content lives here** — see `site.ts`. Edit text, staff, programs, links here. |
| `src/assets/` | Images and the logo. |
| `src/styles.css` | The design system: colours, fonts and theme tokens. |

### Pages (routes)

| File | URL | Page |
| ---- | --- | ---- |
| `index.tsx` | `/` | Home |
| `about.tsx` | `/about` | About the faculty |
| `programs.tsx` | `/programs` | Academic programs |
| `staff.tsx` | `/staff` | Staff directory |
| `portfolio.tsx` | `/portfolio` | Student portfolio program |
| `opportunities.tsx` | `/opportunities` | Jobs & internships |
| `blog.index.tsx` | `/blog` | Blog listing |
| `blog.$slug.tsx` | `/blog/:slug` | A single blog post |
| `nacos.tsx` | `/nacos` | NACOS student body |
| `contact.tsx` | `/contact` | Contact details |

> Adding a new page? Create a new file in `src/routes/` and add a link to it in
> the `NAV_LINKS` array inside `src/data/site.ts`. The router picks it up
> automatically — do not edit `routeTree.gen.ts` (it is auto-generated).

---

## Editing content

Almost all wording, names, links and contact details are kept in **one place**:
`src/data/site.ts`. Update values there and every page that uses them updates too.
Placeholder values (phone, WhatsApp link, social media, Google Forms) should be
replaced with the real ones when available.

---

## Colours & branding (Green & White)

The brand uses **green and white**. Colours are defined once in `src/styles.css`
as theme tokens, so the whole site stays consistent.

| Token | Use it with | Meaning |
| ----- | ----------- | ------- |
| `primary` | `bg-primary`, `text-primary` | Deep green — headers, links, hero |
| `secondary` | `text-secondary` | Mid green — supporting accents |
| `accent` | `bg-accent` | Bright green — call-to-action buttons |
| `nacos` | `bg-nacos` | NACOS green for student-body sections |
| `muted` | `bg-muted` | Light grey section backgrounds |

**Rule of thumb:** never hard-code a colour (like `text-green-600` or
`bg-[#15803d]`) in a component. Always use a token above. To re-brand the whole
site, you only change the values in `src/styles.css`.

Fonts: **Inter** for headings, **Open Sans** for body text. They are loaded in
`src/routes/__root.tsx`.
