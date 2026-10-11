# Rishikesh Munnaluri — Portfolio 3

A scroll-driven WebGL portfolio built with Vite, React 19 and React Three Fiber.

The home journey moves through a glass **RM** monogram, a 3D vertebral project gallery, a garden/finale scene and an interactive contact handset. `/about.html` opens through an OS-style login and contains Rishikesh's profile, skills, internships, milestones, education and engineering philosophy.

## Flagship project order

1. ReturnReview
2. Skylark Command
3. CommercialIQ
4. NoCodeML
5. Axiom Imaging
6. Imposter X
7. Vibify

## Run

```bash
npm install
npm run dev
```

- `/` — hero → flagship projects → garden → contact
- `/about.html` — profile → skills → experience → milestones → education → how I build

Production build:

```bash
npm run build
```

## Notes

- Project cards are generated from Rishikesh's own project data; no reference-project screenshots are included.
- The vertebral GLB and display fonts are loaded from the public reference repository at a pinned commit so the visual system remains faithful without duplicating large binary assets.
- Optional visual assets still have procedural fallbacks so a missing asset cannot take down the page.
