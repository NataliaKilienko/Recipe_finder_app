import { getRecipeById } from '@/lib/api';
import { RecipeDetails } from '@/types/recipe';
import IngredientsList from '@/components/IngredientsList';
import RecipeInfo from '@/components/RecipeInfo';

export const dynamic = 'force-dynamic';

type RecipePageProps = {
  params: {
    id: string;
  };
};

export default async function RecipeDetailsPage({ params }: RecipePageProps) {
  const { id } = params;
  const recipe: RecipeDetails | null = await getRecipeById(id);

  if (!recipe) {
    return (
      <main className="p-6 text-center text-red-500">
        <h1 className="text-2xl font-bold">Recipe not found 😓</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-6 bg-gradient-to-b from-green-50 to-green-100">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8">
        <RecipeInfo
          title={recipe.title}
          image={recipe.image}
          readyInMinutes={recipe.readyInMinutes}
          servings={recipe.servings}
          summary={recipe.summary}
        />

        <IngredientsList ingredients={recipe.extendedIngredients} />

        {recipe.sourceUrl && (
          <div className="mt-8 text-center">
            <a
              href={recipe.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline font-medium"
            >
              View full recipe on {recipe.sourceName || 'source'} →
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
