'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CUISINES } from '@/lib/constants';

export default function SearchForm() {
  const [query, setQuery] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [time, setTime] = useState('');
  const router = useRouter();

  const isButtonDisabled = !query && !cuisine && !time;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();
    if (query) params.append('query', query);
    if (cuisine) params.append('cuisine', cuisine);
    if (time) params.append('maxReadyTime', time);

    router.push(`/recipes?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg flex flex-col gap-5 transition-all"
    >
      <input
        type="text"
        placeholder="Search by keyword (e.g., pasta)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-800 placeholder-gray-400 shadow-sm"
      />

      <select
        value={cuisine}
        onChange={(e) => setCuisine(e.target.value)}
        className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-800 shadow-sm"
      >
        <option value="">Select Cuisine</option>
        {CUISINES.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Max preparation time (minutes)"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-800 placeholder-gray-400 shadow-sm"
      />

      <button
        type="submit"
        disabled={isButtonDisabled}
        className={`px-6 py-3 rounded-xl font-semibold text-white transition-colors duration-200 ${
          isButtonDisabled
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-green-500 hover:bg-green-600'
        }`}
      >
        Next →
      </button>
    </form>
  );
}
