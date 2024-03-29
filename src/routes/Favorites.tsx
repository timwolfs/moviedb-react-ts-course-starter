import { FunctionComponent } from 'react';
import MovieCard from '../components/MovieCard';
import { IMDBMovie } from '../model/movie';
import { useFavorites } from '../contexts/ContextWrapper';

const Favorites: FunctionComponent<{ movies: IMDBMovie[] }> = ({ movies }) => {
  const { getFavoriteMovies } = useFavorites();
  const favoriteMovies = getFavoriteMovies(movies);

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {favoriteMovies.map((movie: IMDBMovie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
};

export default Favorites;
