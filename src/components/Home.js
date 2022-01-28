import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchComputers } from '../redux/computers/computers';
import './assets/home.css';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchComputers());
  }, []);

  const computersState = useSelector((state) => state.computersReducer.computers);

  return (
    <div className="home m-4">
      <nav className="home-nav m-sd-4">
        <div />
        <h1 className="pt-md-5 mt-md-5">Computers</h1>
        <div>
          <i className="fa fa-search align-middle" aria-hidden="true" />
        </div>
      </nav>
      <div className="computers-container pt-4">
        { computersState.map((computer) => (
          <div className=" computer-item p-2" key={computer.id}>
            <Link to={`/computer/${computer.id}`} style={{ textDecoration: 'none', color: '#212529' }}>
              <div className="card m-2">
                <div className="card-body">
                  <div className="img-background" style={{ backgroundImage: `url(${computer.image})` }} />
                  <div className="computer-information pt-4">
                    <div className="d-flex flex-column p-3 computer-info">
                      <h1>{` Computer: ${computer.brand}`}</h1>
                      <br />
                      <p>{` Hdd: ${computer.hdd} TB` }</p>
                      <p>{` Processor: ${computer.processor}`}</p>
                      <p>{` Ram: ${computer.ram}`}</p>
                      <p>{`Price: $${computer.price}`}</p>
                    </div>
                    <div />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}

      </div>
    </div>
  );
};
export default Home;
