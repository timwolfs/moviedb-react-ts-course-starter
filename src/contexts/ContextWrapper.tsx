import { FunctionComponent, createContext, useContext, useState } from 'react';
import { IMDBMovie } from '../model/movie';

export const FavoriteContext = createContext<{
  favorites: string[];
  toggleFavorite: (imdbID: string) => void;
  setFavorites: (favorites: string[]) => void;
  getFavoriteMovies: (allMovies: IMDBMovie[]) => IMDBMovie[];
}>({
  favorites: [],
  toggleFavorite: () => {},
  setFavorites: () => {},
  getFavoriteMovies: () => [],
});

export const MovieDataContext = createContext<{
  movieData: { [imdbID: string]: IMDBMovie | null };
  updateMovieData: (imdbID: string, data: IMDBMovie) => void;
}>({
  movieData: {},
  updateMovieData: () => {},
});

export const useFavorites = () => useContext(FavoriteContext);
export const useMovieData = () => useContext(MovieDataContext);

const ContextWrapper: FunctionComponent<{ children: any }> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [movieData, setMovieData] = useState<{
    [imdbID: string]: IMDBMovie | null;
  }>({});

  const toggleFavorite = (imdbID: string) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(imdbID)) {
        return prevFavorites.filter((id) => id !== imdbID);
      } else {
        return [...prevFavorites, imdbID];
      }
    });
  };

  const getFavoriteMovies = (allMovies: IMDBMovie[]) => {
    return allMovies.filter((movie) => favorites.includes(movie.imdbID));
  };

  const updateMovieData = (imdbID: string, data: IMDBMovie) => {
    setMovieData((prevMovieData) => ({
      ...prevMovieData,
      [imdbID]: data,
    }));
  };

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        toggleFavorite,
        setFavorites,
        getFavoriteMovies,
      }}
    >
      <MovieDataContext.Provider value={{ movieData, updateMovieData }}>
        {children}
      </MovieDataContext.Provider>
    </FavoriteContext.Provider>
  );
};

export default ContextWrapper;
