import React from 'react';

const Favorites = (props) => {
  const {
    id, brand, hdd, processor, ram, price,
  } = props;
  return (
    <div className="pt-4 mt-4 pt-sd-2 mt-sd-2">
      <h1 className="pt-md-5 mt-md-5">My Favorites</h1>
      <ul className="list-group">
            <li className="list-group-item" key={id}>
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