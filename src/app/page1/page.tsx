import type { PostData } from "../../lib/types";

async function fetchPosts(): Promise<PostData[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) throw new Error('Failed to fetch posts');
  return response.json();
}

export default async function Page1() {
  let data: PostData[] = [];
  let error = null;

  try {
    data = await fetchPosts();
  } catch (err) {
    error = err instanceof Error ? err.message : 'Unknown error';
  }

  if (error) {
    return <p className="text-center text-lg text-red-500">Error: {error}</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Página 1 - Server Component</h1>
      <ul className="space-y-6">
        {data.slice(0, 10).map((post) => (
          <li
            key={post.id}
            className="p-6 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-bold text-gray-800">{post.title}</h2>
            <p className="mt-4 text-gray-700 text-base">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}