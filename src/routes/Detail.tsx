import { FunctionComponent } from 'react';
import Toggle from '../components/Toggle';
import { useLocation, Link } from 'react-router-dom';
import { IMDBMovie } from '../model/movie';
import { useMovieData } from '../contexts/ContextWrapper';

const Detail: FunctionComponent = () => {
  const location = useLocation();
  const data: IMDBMovie = location.state;
  const { movieData } = useMovieData();
  const newMovieTitle = movieData?.[data.imdbID]?.Title;
  const newMovieYear = movieData?.[data.imdbID]?.Year;
  const newMovieActors = movieData?.[data.imdbID]?.Actors;

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          <div>
            <div className="w-full aspect-w-1 aspect-h-1">
              <img
                src={data.Poster}
                className="w-full h-full object-center object-cover sm:rounded-lg"
              />
            </div>
          </div>
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <Toggle id={data.imdbID} />
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
              {newMovieTitle ? newMovieTitle : data.Title}
            </h1>
            <div className="mt-3">
              <p className="text-3xl text-gray-900">
                {newMovieYear ? newMovieYear : data.Year}
              </p>
            </div>
            <div className="mt-3">
              <p className="text-xl text-gray-900">
                {newMovieActors ? newMovieActors : data.Actors}
              </p>
            </div>
            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <div className="text-base text-gray-700 space-y-6">
                <p>{data.Plot}</p>
              </div>
            </div>
            <div className="mt-8 flex justify-between text-gray-500">
              <Link to="/home">Back to list</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
