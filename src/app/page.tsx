import Link from 'next/link';
import Image from 'next/image';

// Define an interface for the JSON items
interface Post {
  id: number;
  title: string;
  body: string;
}

export default async function Home() {
  const url = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data: Post[] = await url.json(); // Use the interface here
  console.log(data);

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="grid gap-6 w-full max-w-7xl sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.map((jsonitem: Post, index: number) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative w-full h-40">
                <Image
                  src={'/pic.jpg'}
                  alt="image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-700 mb-4">Joined 12 SEP 2012.</p>
                <Link
                  href={`/${jsonitem.id}`}
                  className="font-bold w-full h-28 text-wrap uppercase hover:underline"
                >
                  {jsonitem.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
