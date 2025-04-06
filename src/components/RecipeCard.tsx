'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Recipe } from '@/types/recipe';

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link
      href={`/recipes/${recipe.id}`}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
    >
      <Image
        src={recipe.image}
        alt={recipe.title}
        width={400}
        height={250}
        className="w-full h-52 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-700">{recipe.title}</h2>
      </div>
    </Link>
  );
}
