import { FunctionComponent } from 'react';
import MovieCard from '../components/MovieCard';
import { IMDBMovie } from '../model/movie';

const Home: FunctionComponent<{ movies: IMDBMovie[] }> = ({ movies }) => {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {movies.map((movie: IMDBMovie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
};

export default Home;
