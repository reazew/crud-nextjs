import type { PostData } from "../../lib/types";

export const revalidate = 60;

export default async function Page3() {
  const data: PostData[] = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json());

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Página 3 - Dynamic com cache (Revalidate: 60s)</h1>
      <ul className="space-y-4">
        {data.slice(0, 5).map((post) => (
          <li key={post.id} className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-blue-600">{post.title}</h2>
            <p className="text-gray-700 mt-2">{post.body}</p>
            <p className="text-sm text-gray-500 mt-2">Post ID: {post.id}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
