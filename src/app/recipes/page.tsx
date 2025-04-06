import { getRecipes } from '@/lib/api';
import RecipeCard from '@/components/RecipeCard';
import { Recipe } from '@/types/recipe';

export const dynamic = 'force-dynamic';
export const revalidate = 60;

export default async function RecipesPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const query =
    typeof searchParams.query === 'string' ? searchParams.query : '';
  const cuisine =
    typeof searchParams.cuisine === 'string' ? searchParams.cuisine : '';
  const maxReadyTime =
    typeof searchParams.maxReadyTime === 'string'
      ? searchParams.maxReadyTime
      : '';

  const recipes: Recipe[] = await getRecipes(query, cuisine, maxReadyTime);

  return (
    <main className="min-h-screen p-6 bg-green-50">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Recipe Results 🍽️
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <p className="text-center text-gray-600">No recipes found 🥲</p>
        )}
      </div>
    </main>
  );
}
