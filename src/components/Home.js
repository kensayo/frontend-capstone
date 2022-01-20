import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchComputers } from '../redux/computers/computers';
import './home.css';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchComputers());
  }, []);

  const computersState = useSelector((state) => state.computersReducer.computers);

  return (
    <div className="m-4">
      <nav className="home-nav m-4">
        <div><i className="fa fa-bars align-middle" aria-hidden="true" /></div>
        <h1>Computers</h1>
        <div>
          <i className="fa fa-search align-middle" aria-hidden="true" />
        </div>
      </nav>
      <div className="computers-container pt-4">
        { computersState.map((computer) => (
          <div className=" computer-item p-2" key={computer.id}>
            <div className="card">
              <div className="card-body">

                <img src={computer.image} alt="computador" className="computer-img" />
                <div className="computer-information pt-4">

                  <p className="computer-description">

                    {` Computer ${computer.brand}`}
                    ,
                    {` Hdd: ${computer.hdd} tera` }
                    ,
                    {` Intel Core ${computer.processor}`}
                    ,
                    {` Ram: ${computer.ram}`}

                  </p>
                  <p className=" computer-price">
                    {`$${computer.price}`}
                  </p>
                  <div />
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};
export default Home;
