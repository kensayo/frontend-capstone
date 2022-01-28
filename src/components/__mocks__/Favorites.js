import PropTypes from 'prop-types';

import React from 'react';

const Favorites = (props) => {
  const {
    brand, hdd, processor, ram, price,
  } = props;
  return (
    <div className="pt-4 mt-4 pt-sd-2 mt-sd-2">
      <h1 className="pt-md-5 mt-md-5">My Favorites</h1>
      <ul className="list-group">
        <li className="list-group-item">
          <p>
            {`
                  Computer brand  ${brand}, 
                  hard disk drive ${hdd} tera,
                  Intel Core ${processor},
                   Ram: ${ram},
                   Price: ${price} dollars.
              `}

          </p>

        </li>
        <div> Please signup or signin </div>

      </ul>

    </div>
  );
};

export default Favorites;

Favorites.propTypes = {
  processor: PropTypes.string.isRequired,
  hdd: PropTypes.string.isRequired,
  ram: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
};
