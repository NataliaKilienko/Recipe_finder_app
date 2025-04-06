import SearchForm from '@/components/SearchForm';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-green-100 to-green-300 p-6">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-4 text-center tracking-tight drop-shadow-sm">
        Recipe Finder{' '}
        <span role="img" aria-label="plate">
          🍽️
        </span>
      </h1>
      <p className="text-lg text-gray-700 mb-10 text-center max-w-xl">
        Search your favorite recipes by keyword, cuisine or preparation time.
      </p>
      <SearchForm />
    </main>
  );
}
