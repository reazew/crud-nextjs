import axios from "axios";
import type { UserData } from "../../../lib/types";

export const revalidate = 30;

async function getUserData(userId: string): Promise<UserData | null> {
  try {
    const { data } = await axios.get<UserData>(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    return data;
  } catch (error) {
    return null;
  }
}

export default async function Page6({
  params,
}: {
  params: Promise<{ param: string }>;
}) {
  const { param } = await params;
  const userData = await getUserData(param);

  if (!userData) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">User Not Found</h1>
        <p className="text-lg text-gray-700 text-center">
          No user found with ID:{" "}
          <span className="font-bold text-red-500">{param}</span>.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Página 6 - Static runtime
      </h1>
      <h1 className="text-2xl mb-6 font-semibold text-center">User Details</h1>
      <div className="p-6 bg-gray-100 border border-gray-200 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold text-blue-600">{userData.name}</h2>
        <ul className="mt-4 space-y-2">
          <li>
            <strong>Username:</strong> {userData.username}
          </li>
          <li>
            <strong>Email:</strong> {userData.email}
          </li>
          <li>
            <strong>Phone:</strong> {userData.phone}
          </li>
          <li>
            <strong>Website:</strong>{" "}
            <a
              href={`https://${userData.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {userData.website}
            </a>
          </li>
          <li>
            <strong>Company:</strong> {userData.company.name} -{" "}
            {userData.company.catchPhrase}
          </li>
          <li>
            <strong>Business:</strong> {userData.company.bs}
          </li>
          <li>
            <strong>Address:</strong>{" "}
            {`${userData.address.suite}, ${userData.address.street}, ${userData.address.city} - ${userData.address.zipcode}`}
          </li>
          <li>
            <strong>Geo Coordinates:</strong>{" "}
            {`Lat: ${userData.address.geo.lat}, Lng: ${userData.address.geo.lng}`}
          </li>
        </ul>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const userIds = [1, 2, 3];
  return userIds.map((id) => ({ param: id.toString() }));
}
