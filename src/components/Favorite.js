import '../App.css';
import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { getFavorites } from '../redux/favorite/favorite';

const Favorite = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  const favList = useSelector((state) => state.favoritesReducer);
  console.log(favList);
  return (
    <div>
      holi
      <Link
        className="nav-link"
        to="/"
      >
        <div className="row pl-2 text-dark">
          <h2 className="links-nav col">
            <FontAwesomeIcon icon={faArrowLeft} />
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default Favorite;
