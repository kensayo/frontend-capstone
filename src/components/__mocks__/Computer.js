import React from 'react';
import PropTypes from 'prop-types';

const Computer = (props) => {
  const {
    brand, hdd, processor, ram, price, image,
  } = props;
  return (
    <div className="computer-detailed">
      <div />
      <nav className="home-nav m-4">
        <h3>{`${brand} computer` }</h3>
      </nav>
      <div className="computer-card">
        <div className="img-background" style={{ backgroundImage: `url(${image})` }} />
        <div className="mt-4 text-cont d-flex align-items-center">
          <div className="computer-information pt-4">
            <div className="d-flex flex-column p-3 computer-info text-center">
              <h1>{` Computer: ${brand}`}</h1>
              <br />
              <p className="info-text">{` Hdd: ${hdd} TB` }</p>
              <p className="info-text">{` Processor: ${processor}`}</p>
              <p className="info-text">{` Ram: ${ram}`}</p>
              <p className="info-text">{`Price: $${price}`}</p>
            </div>
          </div>
        </div>
        <i className="fa fa-angle-down" aria-hidden="true" />
        <div className="d-grid gap-2"><button type="button" className="btn add-favorites btn-block">Add to favorites</button></div>
      </div>
    </div>
  );
};

export default Computer;

Computer.propTypes = {
  image: PropTypes.string.isRequired,
  hdd: PropTypes.string.isRequired,
  ram: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  processor: PropTypes.string.isRequired,
};
