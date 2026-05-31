# Ruhi Kabra — Portfolio

A bespoke, highly interactive digital portfolio for Ruhi Kabra — a multidisciplinary filmmaker, artist, and writer from India. The website features an immersive, tactile visual style with a custom cinematic film grain overlay, custom cursor, smooth animations, and a seamless integration with Sanity CMS for dynamic content management.

## 🚀 Tech Stack

### Frontend Architecture
* **Core Framework**: React 18 with TypeScript & Vite
* **Styling & Aesthetics**: Tailwind CSS with standard custom configuration for elegant typography and spacing
* **Motion & Interactivity**: Framer Motion for rich page transitions and micro-animations
* **Routing**: React Router DOM (v6) for smooth single-page application navigation
* **Data Fetching**: TanStack React Query (v5) for high-performance state caching and data fetching
* **Components & UI**: Radix UI primitives with Tailwind-styled reusable components (Shadcn UI style)
* **Icons**: Lucide React for consistent vector symbols

### Backend & Content Management
* **Content Source**: Sanity.io Studio v3 (located in the `/cms` subdirectory)
* **Data Querying**: Sanity Client using GROQ queries

---

## 📁 Repository Structure

```
├── .gitignore              # Project-wide ignore rules
├── components.json         # Shadcn UI configuration
├── index.html              # HTML shell & SEO meta tags
├── package.json            # Node dependencies and scripts
├── postcss.config.js       # PostCSS styling configs
├── tailwind.config.ts      # Tailored themes, colors, and layout tokens
├── tsconfig.json           # TypeScript definitions
├── vercel.json             # Vercel deployment routes and rewrites
├── vite.config.ts          # Vite build pipeline configs
├── vitest.config.ts        # Vitest runner settings
│
├── cms/                    # Sanity.io Studio codebase
│   ├── package.json        # CMS specific packages
│   ├── sanity.config.ts    # Studio configurations and datasets
│   └── schemaTypes/        # Sanity schemas (films, writing, artwork, etc.)
│
└── src/                    # React frontend application
    ├── App.tsx             # Application router & main shell
    ├── main.tsx            # Application entrypoint
    ├── components/         # Reusable custom UI components (FilmGrain, CustomCursor, Navbar, etc.)
    ├── hooks/              # Reusable React hooks
    ├── lib/                # Utility utilities (e.g., tailwind merge)
    ├── pages/              # Page layouts (Index, Film, Theatre, Art, Writing, BlogPost)
    └── test/               # Vitest suite for component validations
```

---

## 🛠️ Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### Running the Frontend
1. Clone the repository and navigate to the project directory:
   ```bash
   cd Ruhi_kabra
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:8080`.

### Running the Sanity Studio (CMS)
To manage the films, writing pieces, and artworks:
1. Navigate to the CMS directory:
   ```bash
   cd cms
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the local Sanity Studio server:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:3333` to view the Studio panel.

---

## 🧪 Testing and Linting

The frontend comes configured with automated code quality and unit testing suites:

* **Run Tests (Vitest)**:
  ```bash
  npm run test
  ```
* **Run Tests in Watch Mode**:
  ```bash
  npm run test:watch
  ```
* **Run ESLint Code Quality Verification**:
  ```bash
  npm run lint
  ```

---

## 🔒 License

Private repository. Copyright © 2026 Ruhi Kabra. All rights reserved.
