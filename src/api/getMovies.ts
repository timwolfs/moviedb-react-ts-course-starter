export const getMovies = async (term: string): Promise<any> => {
  return await fetch(`https://www.omdbapi.com/?apikey=1a993ee0&s=${term}`).then(
    (result) => result.json()
  );
};

export const getMovieId = async (id: string): Promise<any> => {
  return await fetch(`https://www.omdbapi.com/?apikey=1a993ee0&i=${id}`).then(
    (result) => result.json()
  );
};
