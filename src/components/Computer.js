import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { fetchComputer } from '../redux/computers/computer';
import './home.css';

const Home = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchComputer(id));
  }, []);

  const computer = useSelector((state) => state.computerReducer.computer);
  return (
    <div className="m-4">
      <div className="computers-container pt-4">
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

      </div>
    </div>
  );
};
export default Home;
