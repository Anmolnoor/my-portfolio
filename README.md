# anmolnoor.com

My personal portfolio and blog, live at **[anmolnoor.com](https://www.anmolnoor.com)**.

It's where I keep my projects, write about what I'm building, and document my homelab and infrastructure tinkering.

## About me

I'm **Anmol Noor**, a software engineer and builder based in Vancouver, BC. I like
turning ideas into robust products and spend most of my time on full-stack
development, distributed systems, and developer tooling. Outside of code you'll
find me tinkering with self-hosted infrastructure, reading, or chasing down a new
technology.

- **Focus:** Software · Systems · AI tools
- **Currently building:** [skep](https://skep.anmolnoor.com), a local-first supervisor for AI coding agents, plus [Foundation CLI](https://github.com/Anmolnoor/fcli) and my homelab/infra setup

## Connect

- **Website:** [anmolnoor.com](https://www.anmolnoor.com)
- **GitHub:** [@anmolnoor](https://github.com/anmolnoor)
- **LinkedIn:** [in/anmol-noor](https://www.linkedin.com/in/anmol-noor/)
- **X (Twitter):** [@noor_anmol](https://twitter.com/noor_anmol)
- **Email:** [anmolnoor59@gmail.com](mailto:anmolnoor59@gmail.com)

## What's here

- **Home** — a quick intro, what I'm currently building, and selected projects
- **Blog** — posts on building in public, AI-assisted development, and my homelab
- **Projects** — an archive of things I've shipped, from SaaS apps to weekend hacks
- **Resume** — roles, selected projects, and recent writing on one page

## Tech stack

- [Astro](https://astro.build) (static output) with [React](https://react.dev) islands
- [Tailwind CSS](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com)
- MDX for blog content
- Deployed on [Vercel](https://vercel.com)

## Running locally

Requires Node `>=22.23.4`. Uses npm (`package-lock.json`).

```bash
npm install
npm run dev      # start the dev server
npm run check    # type-check with astro check
npm run build    # production build (dist/ and .vercel/output/)
npm test         # tests; the site-build suite reads the built output, so build first
npm run preview  # preview the build
```
