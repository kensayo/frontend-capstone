import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFavoritesfromUser } from '../redux/favorite/favorite';

const Favorites = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  useEffect(() => {
    dispatch(fetchFavoritesfromUser(user.id));
  }, []);

  const favoritesState = useSelector((state) => state.favoritesReducer.favorites);

  return (
    <div className="pt-4 mt-4 pt-sd-2 mt-sd-2">
      <h1 className="pt-md-5 mt-md-5">My Favorites</h1>
      <ul className="list-group">
        {
        (favoritesState && user)
          ? favoritesState.map((fav) => (
            <li className="list-group-item" key={fav.id}>
              <p>
                {`
                  Computer brand  ${fav.brand}, 
                  hard disk drive ${fav.hdd} tera,
                  Intel Core ${fav.processor},
                   Ram: ${fav.ram},
                   Price: ${fav.price} dollars.
              `}

              </p>

            </li>

          ))
          : <div> Please signup or signin </div>
        }
      </ul>

    </div>
  );
};

export default Favorites;
