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
  console.log(favoritesState, 'Byeee');

  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Morbi leo risus</li>
        <li className="list-group-item">Porta ac consectetur ac</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>
  );
};

export default Favorites;
