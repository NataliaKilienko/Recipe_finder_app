# Recipe Finder App

A modern recipe search application built with **Next.js**, **TypeScript**, and **Tailwind CSS**.  
It allows users to search for recipes using keyword, cuisine type, or max preparation time and explore detailed information for each recipe.

---

## Features

- Search recipes by keyword (e.g., "pasta")
- Filter by cuisine (e.g., Italian, Mexican, Chinese, etc.)
- Limit results by maximum preparation time (in minutes)
- Server-side rendered results using Next.js
- View detailed recipe pages with:
  - Image
  - Summary
  - Ingredients
  - Preparation time & servings
- Navigation between pages using dynamic routes (`/recipes/[id]`)
- Fully styled with **Tailwind CSS**
- ESLint & Prettier setup for clean and consistent code
- API caching for 1 minute using `next.revalidate`

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                  # Root layout
│   ├── globals.css                 # Global styles
│   ├── page.tsx                    # Homepage with <SearchForm />
│   └── recipes/
│       ├── page.tsx                # Recipes search results page
│       ├── loading.tsx             # Loading UI for results
│       └── [id]/
│           ├── page.tsx            # Recipe details page
│           └── loading.tsx         # Loading UI for details page

├── components/
│   ├── SearchForm.tsx              # Search form UI
│   ├── RecipeCard.tsx              # Recipe card for results grid
│   ├── RecipeInfo.tsx              # Recipe details UI
│   ├── IngredientsList.tsx         # Ingredients list UI
│   └── LoadingSpinner.tsx          # Reusable loading spinner

├── lib/
│   ├── api.ts                      # API utilities for data fetching
│   └── constants.ts                # App constants (e.g., cuisine options)

├── types/
│   └── recipe.ts                   # TypeScript interfaces and types for recipes

public/
└── favicon.ico                     # Favicon

.env.local                          # Environment variables (e.g., Spoonacular API key)
.eslint.config.mjs                 # ESLint configuration (flat config)
.prettierrc                        # Prettier formatting rules
.gitignore                         # Git ignored files
next.config.ts                     # Next.js configuration
tsconfig.json                      # TypeScript compiler configuration
README.md                          # Project overview and instructions

```

---

## Technologies Used

- **Next.js 15 (App Router + SSR)**
- **TypeScript**
- **Tailwind CSS**
- **Spoonacular API**
- **React 19**
- **ESLint & Prettier**

---

## Installation

```bash
git clone https://github.com/your-username/recipe-finder-app.git
cd recipe-finder-app
npm install
```

> Don't forget to add your API key 👇

### Environment Variables

Create a `.env.local` file in the root of the project:

```
SPOONACULAR_API_KEY=your_api_key_here
```

---

## Running the App

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## Build for Production

```bash
npm run build
npm run start
```

---

## Linting & Formatting

```bash
npm run lint    # Run ESLint
npm run format  # Run Prettier
```

---

## API Reference

Powered by [Spoonacular API](https://spoonacular.com/food-api)

---

## Author

**Nataliia Kiliienko** – Front-End Developer 
GitHub: [@NataliaKilienko](https://github.com/NataliaKilienko)
