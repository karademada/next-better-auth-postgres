import Image from "next/image";

export type Movie = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
};

export default function MovieList({ movies }: { movies: Movie[] }) {
  if (!movies || movies.length === 0) {
    return <div className="text-center text-gray-400">No movies found.</div>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {movies.map((movie) => (
        <div key={movie.id} className="flex flex-col bg-neutral-900 rounded-lg shadow p-4">
          <div className="flex justify-center mb-2">
            <Image
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              width={150}
              height={225}
              className="rounded-md object-cover"
            />
          </div>
          <h2 className="text-lg font-semibold mb-1 text-white">{movie.title}</h2>
          <p className="text-xs text-gray-400 mb-2">{movie.release_date}</p>
          <p className="text-sm text-gray-300 line-clamp-3">{movie.overview}</p>
        </div>
      ))}
    </div>
  );
}
