import React from 'react';

const Home = (props) => {
  const {
    id, brand, hdd, processor, ram, price, image,
  } = props;
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
          <div className=" computer-item p-2" key={id}>
              <div className="card m-2">
                <div className="card-body">
                  <div className="img-background" style={{ backgroundImage: `url(${image})` }} />
                  <div className="computer-information pt-4">
                    <div className="d-flex flex-column p-3 computer-info">
                      <h1>{` Computer: ${brand}`}</h1>
                      <br />
                      <p>{` Hdd: ${hdd} TB` }</p>
                      <p>{` Processor: ${processor}`}</p>
                      <p>{` Ram: ${ram}`}</p>
                      <p>{`Price: $${price}`}</p>
                    </div>
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
