import '../App.css';
import './assets/favorite.css';
import { React } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faHeart, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
// import { getFavorites } from '../redux/favorite/favorite';

const Favorite = () => (
  <div>
    <div className="topCont pt-3 row">
      <div className="col">
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
      <div className="col">
        <h2>Favorites</h2>
      </div>
      <div className="col pt-3">
        <h4><FontAwesomeIcon icon={faTimes} /></h4>
      </div>
    </div>
    <div className="previewCont">
      <div className="insideDescr d-flex justify-content-around align-items-end">
        <div className="infoCont row">
          <div className="info col-8 mx-2 row">
            <div className="col-4">
              <div className="processorPic mt-2" />
            </div>
            <div className="textBox col-6">
              <h5 className="pt-2">All in one LENOVO</h5>
            </div>
          </div>
          <div className="price col">
            <h4 className="pt-2 mb-0">$10</h4>
            <p>Per Day</p>
          </div>
        </div>
      </div>
    </div>
    <div className="descriptionCont p-3">
      <h4>About</h4>
      <p className="mb-0">TextTextTextTextTextTextTextTextTextText TextTextTextTextTextTextTextTextTextText TextTextTextTextTextTextTextTextTextText TextTextTextTextTextTextTextTextTextText TextTextTextTextTextTextTextTextTextText TextTextTextTextTextTextTextTextTextText TextTextTextTextTextTextTextTextTextText TextTextTextTextTextTextTextTextTextText TextTextTextTextTextTextTextTextTextText</p>
    </div>
    <div className="orange">
      <h2 className="links-nav col text-white p-4">
        <FontAwesomeIcon icon={faHeart} />
      </h2>
    </div>
  </div>
);

export default Favorite;
