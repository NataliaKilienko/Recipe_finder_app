'use client';

import { Ingredient } from '@/types/recipe';

export default function IngredientsList({
  ingredients,
}: {
  ingredients: Ingredient[];
}) {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4 text-gray-700 flex items-center gap-2">
        🧂 Ingredients
      </h2>
      <ul className="list-disc list-inside text-gray-800 mb-4 space-y-1">
        {ingredients.map((ing, index) => (
          <li key={`${ing.id}-${index}`}>
            <span className="font-medium">
              {ing.amount} {ing.unit}
            </span>{' '}
            {ing.name}
          </li>
        ))}
      </ul>
    </>
  );
}
