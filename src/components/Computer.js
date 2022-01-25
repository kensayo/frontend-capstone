import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { fetchComputer } from '../redux/computers/computer';
import './assets/home.css';
import './assets/computer.css';

const Home = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchComputer(id));
  }, []);

  const computer = useSelector((state) => state.computerReducer.computer);
  return (
    <div className="computer-detailed">
      <nav className="home-nav m-4">
        <Link to="/" style={{ textDecoration: 'none', color: '#212529' }}><i className="fa fa-angle-left" aria-hidden="true" /></Link>
        <h1>{`${computer.brand} computer` }</h1>
        <div>
          <i className="fa fa-search align-middle" aria-hidden="true" />
        </div>
      </nav>
      <div className="computer-card">
        <img src={computer.image} alt="computador" className="computer-img" />
        <div className="mt-4">
          <h6 className="computer-title">About this computer</h6>
          <p className="computer-text">
            {` Computer brand ${computer.brand} , 
          hard disk drive ${computer.hdd} tera,
          Intel Core ${computer.processor},
           Ram: ${computer.ram}`}

          </p>
          <i className="fa fa-angle-down" aria-hidden="true" />
          <div className="d-grid gap-2"><button type="button" className="btn add-favorites btn-block">Add to favorites</button></div>
        </div>
      </div>
    </div>
  );
};
export default Home;
