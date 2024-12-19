import { Suspense } from 'react';
import PhotoGallery from '../../components/PhotoGallery';
import { Skeleton } from '../../components/ui/skeleton';

export default function Page7() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Página 7 -  Loading server side</h1>
      <h1 className="text-2xl mb-6 font-semibold text-center">Gallery</h1>
      <Suspense fallback={<LoadingFallback />}>
        <PhotoGallery />
      </Suspense>
    </div>
  );
}

function LoadingFallback() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="p-4 bg-white border border-gray-300 rounded-lg shadow-md flex flex-col space-y-4"
        >
          <Skeleton className="h-40 w-full bg-gray-200 rounded" />
          <Skeleton className="h-6 w-3/4 bg-gray-200 rounded" />
        </div>
      ))}
    </div>
  );
}
