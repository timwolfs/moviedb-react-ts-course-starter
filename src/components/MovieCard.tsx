import { FunctionComponent } from 'react';
import { getMovieId } from '../api/getMovies';
import { IMDBMovie } from '../model/movie';
import { useNavigate } from 'react-router-dom';
import { useFavorites, useMovieData } from '../contexts/ContextWrapper';

const MovieCard: FunctionComponent<{ movie: IMDBMovie }> = ({ movie }) => {
  const navigate = useNavigate();
  const { favorites, setFavorites } = useFavorites();
  const { movieData } = useMovieData();
  const isFavorite = favorites.includes(movie.imdbID);

  const fetchMovieData = async (path: string) => {
    const data = await getMovieId(movie.imdbID);
    navigate(path, { state: data });
  };

  const handleDetailClick = () => {
    fetchMovieData(`/detail/${movie.imdbID}`);
  };

  const handleEditClick = () => {
    fetchMovieData(`/edit/${movie.imdbID}`);
  };

  const handleRemoveClick = () => {
    setFavorites(favorites.filter((id) => id !== movie.imdbID));
  };

  const newMovieTitle = movieData?.[movie.imdbID]?.Title;
  const newMovieYear = movieData?.[movie.imdbID]?.Year;

  return (
    <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
      <div className="flex-1 flex flex-col">
        <div onClick={handleDetailClick} className="cursor-pointer">
          <img className="h-48 mx-auto mt-4" src={movie.Poster} />
          <div className="p-4">
            <h3 className="mt-6 text-gray-900 text-sm font-medium">
              {newMovieTitle ? newMovieTitle : movie.Title}
            </h3>
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dd className="text-gray-500 text-sm">
                {newMovieYear ? newMovieYear : movie.Year}
              </dd>
            </dl>
          </div>
        </div>
        {isFavorite && (
          <div className="flex justify-between px-4 pb-4 w-full">
            <button
              onClick={handleEditClick}
              type="button"
              className="text-orange-500"
            >
              Edit
            </button>
            <button
              onClick={handleRemoveClick}
              type="button"
              className="text-red-500"
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </li>
  );
};

export default MovieCard;
