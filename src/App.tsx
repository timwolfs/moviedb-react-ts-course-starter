import Search from './components/Search';
import { getMovies } from './api/getMovies';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';
import Favorites from './routes/Favorites';
import Edit from './routes/Edit';
import { IMDBMovie } from './model/movie';

const App = () => {
  const [movies, setMovies] = useState<IMDBMovie[]>([]);
  const fetchMovies = async (term: string) => {
    const data = await getMovies(term);
    if (data.Response === 'True') {
      setMovies(data.Search);
    } else {
      alert(data.Error);
    }
  };

  return (
    <div className="min-h-full">
      <header className="bg-white shadow-sm lg:static lg:overflow-y-visible">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
            <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/home">MovieDB</Link>
              </div>
            </div>
            <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
              <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                <Search onSearchSubmit={fetchMovies} />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="py-10">
        <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="hidden lg:block lg:col-span-3 xl:col-span-2">
            <nav
              aria-label="Sidebar"
              className="sticky top-4 divide-y divide-gray-300"
            >
              <div className="pb-8">
                {/* navigation */}
                <ul className="space-y-1.5">
                  <li>
                    <Link
                      className="bg-gray-200 rounded-lg px-2.5 py-2 w-full block"
                      to="/home"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="bg-gray-200 rounded-lg px-2.5 py-2 w-full block"
                      to="/favorites"
                    >
                      Favorites
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <main className="lg:col-span-9">
            {/* routing */}
            <Routes>
              <Route path="/home" element={<Home movies={movies} />} />
              <Route path="/detail/:imdbID" element={<Detail />} />
              <Route
                path="/favorites"
                element={<Favorites movies={movies} />}
              />
              <Route path="/edit/:imdbID" element={<Edit />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
