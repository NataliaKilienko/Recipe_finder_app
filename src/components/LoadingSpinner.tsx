'use client';

export default function LoadingSpinner({
  message = 'Loading...',
}: {
  message?: string;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 text-gray-700">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-500 mx-auto mb-4" />
        <p className="text-lg font-medium">{message}</p>
      </div>
    </div>
  );
}
