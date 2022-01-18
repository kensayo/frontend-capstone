import React from 'react';
import './home.css';

const Home = () => {
  const computers = [{
    id: 1,
    hdd: '1 tera',
    proccessor: '9',
    ram: 16,
    brand: 'hp',
    price: 1000,
    accessories: 'mouse, keyboard',
  }, {
    id: 2,
    hdd: '1 tera',
    proccessor: '7',
    ram: 8,
    brand: 'apple',
    price: 3000,
    accessories: 'mouse',
  }, {
    id: 3,
    hdd: '1 tera',
    proccessor: '9',
    ram: 16,
    brand: 'lenovo',
    price: 2000,
    accessories: 'mouse, keyboard',
  }];

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
        { computers.map((computer) => (
          <div className=" computer-item p-2" key={computer.id}>
            <div className="card">
              <div className="card-body">

                <img src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="computador" className="computer-img" />
                <div className="computer-information pt-4">

                  <p className="computer-description">

                    {` Computer ${computer.brand}`}
                    ,
                    {` Hdd: ${computer.hdd}`}
                    ,
                    {` Proccessor: Intel Core ${computer.proccessor}`}
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
