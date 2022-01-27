import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import { fetchComputer } from '../redux/computers/computer';
import './assets/home.css';
import './assets/computer.css';
import { addFavorite } from '../redux/favorite/favorite';

const Home = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchComputer(id));
  }, []);

  const computer = useSelector((state) => state.computerReducer.computer);
  const user = useSelector((state) => state.userReducer.user);
  console.log(user, 'from computer');

  const addFavoriteonClick = () => {
    dispatch(addFavorite(user.id, computer.id));
    navigate('/fav');
  };

  return (
    <div className="computer-detailed">
      <div />
      <nav className="home-nav m-4">
        <h3>{`${computer.brand} computer` }</h3>
        <div>
          <h2><Link to="/" style={{ textDecoration: 'none', color: '#212529' }}><i className="fa fa-angle-left" aria-hidden="true" /></Link></h2>
        </div>
      </nav>
      <div className="computer-card">
        <div className="img-background" style={{ backgroundImage: `url(${computer.image})` }} />
        <div className="mt-4 text-cont d-flex align-items-center">
          <div className="computer-information pt-4">
            <div className="d-flex flex-column p-3 computer-info text-center">
              <h1>{` Computer: ${computer.brand}`}</h1>
              <br />
              <p className="info-text">{` Hdd: ${computer.hdd} TB` }</p>
              <p className="info-text">{` Processor: ${computer.processor}`}</p>
              <p className="info-text">{` Ram: ${computer.ram}`}</p>
              <p className="info-text">{`Price: $${computer.price}`}</p>
            </div>
          </div>
        </div>
        <i className="fa fa-angle-down" aria-hidden="true" />
        <div className="d-grid gap-2"><button type="button" className="btn add-favorites btn-block" onClick={addFavoriteonClick}>Add to favorites</button></div>
      </div>
    </div>
  );
};
export default Home;
