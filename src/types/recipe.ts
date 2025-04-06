export type Recipe = {
  id: number;
  title: string;
  image: string;
};

export type Ingredient = {
  id: number;
  name: string;
  amount: number;
  unit: string;
};

export type RecipeDetails = {
  id: number;
  title: string;
  image: string;
  extendedIngredients: Ingredient[];
  readyInMinutes: number;
  servings: number;
  summary: string;
  sourceName?: string;
  sourceUrl?: string;
};
