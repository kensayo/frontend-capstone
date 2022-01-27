import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFavoritesfromUser } from '../redux/favorite/favorite';
/* eslint-disable  react/jsx-key */
const Favorites = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  useEffect(() => {
    dispatch(fetchFavoritesfromUser(user.id));
  }, []);

  const favoritesState = useSelector((state) => state.favoritesReducer.favorites);

  return (
    <div>
      <h1 className="pt-4 mt-4">My Favorites</h1>
      <ul className="list-group">
        {
        (favoritesState && user)
          ? favoritesState.map((fav) => (
            <li className="list-group-item">
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
