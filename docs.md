# amosboldor

## Dependencies

- **Next.js**: A React framework that provides server-side rendering and static site generation.
- **React & ReactDOM**: JavaScript libraries for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds optional static typing.
- **TailwindCSS**: A utility-first CSS framework for rapidly building custom designs.
- **ESLint**: A linter tool for JavaScript and TypeScript that ensures code quality.
- **PostCSS & Autoprefixer**: Tools to process and optimize CSS for cross-browser compatibility.

## Project Structure

- `next.config.js`: Configuration file for Next.js.
- `next-env.d.ts`: TypeScript declarations for Next.js.
- `package.json`: Contains the list of project dependencies and scripts.
- `pnpm-lock.yaml`: A lock file created by pnpm, ensuring dependencies versions consistency.
- `postcss.config.js`: Configuration for PostCSS.
- `src/`: Main directory for the project's source code.
  - `app/`: Contains global styles and layout components for the app.
    - `globals.css`: Global styles for the project.
    - `layout.tsx`: Main layout component.
    - `page.tsx`: General page component.
- `tailwind.config.ts`: Configuration file for TailwindCSS.
- `tsconfig.json`: Configuration for TypeScript in the project.

## Setup

1. Install dependencies:
```bash
pnpm install
```

2. Run the development server:
```bash
pnpm dev
```

Visit `http://localhost:3000` to view the app in the browser.
