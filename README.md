# Abel Shibabaw — Portfolio

Personal portfolio site for a senior full-stack developer: projects, experience, education, skills, and contact—built as a fast, SEO-friendly Next.js app with a polished UI and motion.

## Live site

[https://abels-porfolio.vercel.app](https://abels-porfolio.vercel.app)

## Tech stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) v4
- [Framer Motion](https://www.framer.com/motion/) / Motion
- [GSAP](https://gsap.com/)
- [Three.js](https://threejs.org/) via [`@react-three/fiber`](https://docs.pmnd.rs/react-three-fiber) and [`@react-three/drei`](https://github.com/pmndrs/drei)
- UI primitives styled with patterns common to [shadcn/ui](https://ui.shadcn.com/) (Radix primitives, `class-variance-authority`, `tailwind-merge`)
- [next-themes](https://github.com/pacocoursey/next-themes) for light/dark mode

## Local development

Install dependencies (this repo includes both `pnpm` and npm lockfiles; either tool works):

```bash
pnpm install
# or: npm install
```

Start the dev server (Turbopack):

```bash
pnpm dev
# or: npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
pnpm build   # production build
pnpm start   # run production server
pnpm lint    # ESLint
```

## Customizing content

Most copy and structured content live under `data/` as JSON (for example experience, projects, education). Update those files and assets under `public/` (images, icons, Open Graph image) to match your profile. Site metadata and SEO defaults are configured in `app/layout.tsx`.

## License

This repository is **private** and intended for personal use. All rights reserved unless you explicitly choose to publish it under a license.
