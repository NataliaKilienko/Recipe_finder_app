'use client';

import Image from 'next/image';

export default function RecipeInfo({
  title,
  image,
  readyInMinutes,
  servings,
  summary,
}: {
  title: string;
  image: string;
  readyInMinutes: number;
  servings: number;
  summary: string;
}) {
  return (
    <>
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
        {title}
      </h1>

      <div className="flex justify-center mb-6">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="rounded-xl shadow-md object-cover"
        />
      </div>

      <div className="flex justify-center gap-4 text-gray-600 mb-6 text-sm sm:text-base">
        <span>
          ⏱️ Ready in <strong>{readyInMinutes}</strong> mins
        </span>
        <span>
          🍽️ Servings: <strong>{servings}</strong>
        </span>
      </div>

      <div
        className="prose prose-green max-w-none mb-8 text-gray-700"
        dangerouslySetInnerHTML={{ __html: summary }}
      />
    </>
  );
}
