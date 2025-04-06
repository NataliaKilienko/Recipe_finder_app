import { Recipe, RecipeDetails } from '@/types/recipe';

export async function getRecipes(
  query: string,
  cuisine: string,
  maxReadyTime: string
): Promise<Recipe[]> {
  const url = new URL('https://api.spoonacular.com/recipes/complexSearch');
  url.searchParams.append('apiKey', process.env.SPOONACULAR_API_KEY!);
  url.searchParams.append('number', '100');

  if (query) url.searchParams.append('query', query);
  if (cuisine) url.searchParams.append('cuisine', cuisine);
  if (maxReadyTime) url.searchParams.append('maxReadyTime', maxReadyTime);

  const res = await fetch(url.toString(), { next: { revalidate: 60 } });

  if (!res.ok) {
    console.error('Failed to fetch recipes');
    return [];
  }

  const data = await res.json();
  return data.results || [];
}

export async function getRecipeById(id: string): Promise<RecipeDetails | null> {
  try {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.SPOONACULAR_API_KEY}`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) throw new Error('Failed to fetch');

    return await res.json();
  } catch (error) {
    console.error('Error fetching recipe by ID:', error);
    return null;
  }
}
