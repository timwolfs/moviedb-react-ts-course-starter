import { FunctionComponent, ChangeEvent, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IMDBMovie } from '../model/movie';
import { useMovieData } from '../contexts/ContextWrapper';

const Edit: FunctionComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data: IMDBMovie = location.state;
  const { updateMovieData } = useMovieData();
  const [formData, setFormData] = useState<IMDBMovie>({
    ...data,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateMovieData(data.imdbID, formData);
    navigate('/favorites');
  };

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
          <form onSubmit={handleSubmit}>
            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <div className="mt-1">
                  <input
                    onChange={handleChange}
                    value={formData.Title}
                    name="Title"
                    type="text"
                    className="shadow-sm p-2 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700">
                  Year
                </label>
                <div className="mt-1">
                  <input
                    onChange={handleChange}
                    value={formData.Year}
                    name="Year"
                    type="text"
                    className="shadow-sm p-2 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700">
                  Actors
                </label>
                <div className="mt-1">
                  <input
                    onChange={handleChange}
                    value={formData.Actors}
                    name="Actors"
                    type="text"
                    className="shadow-sm p-2 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  className="text-sm text-blue-500 hover:text-black"
                  type="submit"
                >
                  Save favorite
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
