import axios from 'axios';

async function fetchPhotos() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/photos', {
    params: { _limit: 4 },
  });
  return response.data;
}

export default async function PhotoGallery() {
  const photos = await fetchPhotos();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {photos.map((photo: { id: number; title: string; thumbnailUrl: string }) => (
        <div
          key={photo.id}
          className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <img src={photo.thumbnailUrl} alt={photo.title} className="rounded mb-2" />
          <h3 className="text-sm font-semibold text-gray-800">{photo.title}</h3>
        </div>
      ))}
    </div>
  );
}
