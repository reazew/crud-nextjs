import type { PostData } from "../../lib/types";

export const fetchCache = 'force-no-store';

export default async function Page4() {
  const data: PostData[] = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json());

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Página 4 - Dynamic sem cache</h1>
      <ul className="space-y-4">
        {data.slice(0, 5).map((post) => (
          <li
            key={post.id}
            className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold text-blue-600">{post.title}</h2>
            <p className="text-gray-700 mt-2">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
