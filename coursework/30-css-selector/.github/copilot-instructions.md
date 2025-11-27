# Copilot Instructions for 30-css-selector

## Project Overview
This is a minimal TypeScript + Vite starter for experimenting with CSS selectors and basic web development. The project structure is intentionally simple for learning purposes.

## Architecture & Key Files
- `index.html`: Main HTML file. Contains sample elements with various classes and IDs for selector practice.
- `src/index.ts`: Entry point for TypeScript. Currently only imports CSS. Extend here for JS/TS logic.
- `src/styles.css`: Main stylesheet. All CSS selector work should be done here.
- `src/vite-env.d.ts`: Vite type definitions for TypeScript support.
- `assets/`: Reserved for static assets. Currently empty except for `.gitkeep`.

## Build & Run Workflows
- **Development server:**
  - Run `npm start` to launch Vite dev server.
- **Build for production:**
  - Run `npm run build` (runs TypeScript type-check and Vite build).
- **Preview production build:**
  - Run `npm run preview`.

## Conventions & Patterns
- All source code lives in `src/`.
- Use modern ES2023 and strict TypeScript settings (see `tsconfig.json`).
- CSS selectors should target elements in `index.html` for demonstration and learning.
- No framework or external dependencies are used (besides Vite and TypeScript).
- Keep code and styles simple and readable for educational clarity.

## Integration Points
- Vite handles module bundling and dev server.
- TypeScript is used for type safety, but no advanced features are required.
- No backend or API integration.

## Examples
- To add a new selector, edit `src/styles.css` and target elements/classes/IDs from `index.html`.
- To add interactivity, extend `src/index.ts` with DOM manipulation code.

## Troubleshooting
- If build fails, check for TypeScript errors (strict settings).
- If styles do not apply, verify selector matches and correct CSS syntax.

---

_If any section is unclear or missing, please provide feedback for improvement._
