'use client';

import { useEffect, useState } from 'react';
import type { MockData } from '../lib/types';
import { Skeleton } from './ui/skeleton';

export default function ClientData() {
  const [data, setData] = useState<MockData[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [skeletonCount, setSkeletonCount] = useState<number>(3);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/get-mock-data');
        if (!response.ok) throw new Error('Failed to fetch data');
        const result: MockData[] = await response.json();
        setSkeletonCount(result.length); 
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div className="space-y-4">
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <div
            key={index}
            className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col space-y-4"
          >
            <Skeleton className="h-6 w-3/4 bg-gray-200 rounded" />
            <Skeleton className="h-4 w-5/6 bg-gray-200 rounded" />
            <Skeleton className="h-4 w-1/2 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
    );
  if (error) return <p className="text-center text-lg text-red-500">{error}</p>;

  return (
    <div className="space-y-6">
      {data?.map((item) => (
        <div
          key={item.id}
          className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <h2 className="text-2xl font-semibold text-gray-800">{item.name}</h2>
          <p className="text-gray-600 mt-2">
            <strong>Email:</strong> {item.email}
          </p>
          <p className="text-gray-600">
            <strong>Age:</strong> {item.age}
          </p>
        </div>
      ))}
    </div>
  );
}
