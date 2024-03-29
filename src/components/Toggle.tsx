import { FunctionComponent } from 'react';
import { useFavorites } from '../contexts/ContextWrapper';
import clsx from 'clsx';

const Toggle: FunctionComponent<{ id: string }> = ({ id }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.includes(id);

  return (
    <div className="flex flex-row-reverse">
      <button
        type="button"
        className={clsx(
          isFavorite ? 'bg-green-600' : 'bg-gray-200',
          'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        )}
        role="switch"
        aria-checked="false"
        onClick={() => toggleFavorite(id)}
      >
        <span
          aria-hidden="true"
          className={clsx(
            isFavorite ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
          )}
        ></span>
      </button>
      <b>Favorite: </b>
    </div>
  );
};

export default Toggle;
