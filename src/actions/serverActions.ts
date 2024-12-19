import type { MockData } from "../lib/types";

export async function getMockData(): Promise<MockData[]> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 28 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 34 },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', age: 22 },
  ];
}
