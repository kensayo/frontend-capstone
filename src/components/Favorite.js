import '../App.css';
import './favorite.css';
import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
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
      <div className="topContr row">
        <div>
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
        <div>
          <h2>Favorites</h2>
        </div>
        <div>
          <h4>Menu</h4>
        </div>
      </div>
      <div className="previewCont d-flex justify-content-around align-items-end">
        <div className="infoCont row">
          <div className="info col row">
            <div className="col-6">
              <div className="processorPic" />
            </div>
            <div className="col-6">
              <h4>All in one LENOVO</h4>
              <p>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </p>
            </div>
          </div>
          <div className="price col">
            <h4>$10</h4>
            <p>Per Day</p>
          </div>
        </div>
      </div>
      <div className="descriptionCont">
        <h4>About</h4>
        <p>TextTextTextTextTextTextTextTextTextText</p>
      </div>
      <div className="orange">
        <h2 className="links-nav col text-white">
          <FontAwesomeIcon icon={faHeart} />
        </h2>
      </div>
    </div>
  );
};

export default Favorite;
