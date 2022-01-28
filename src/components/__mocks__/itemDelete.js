import PropTypes from 'prop-types';

const ItemDelete = (props) => {
  const {
    processor,
    hdd,
    ram,
    price,
    brand,
    accessories,
  } = props;
  return (
    <ul className="list-group p-2">
      <li className="list-group-item li delete-l">

        <p className="delete-computer">
          {`
            Computer brand  ${brand}, 
            hard disk drive ${hdd} tera,
            Intel Core ${processor},
            Ram: ${ram},
            Accessories: ${accessories}, 
            Price: ${price} dollars.
         `}

        </p>
        <button className="fill" type="button">Delete</button>
      </li>
    </ul>
  );
};

export default ItemDelete;

ItemDelete.propTypes = {
  processor: PropTypes.string.isRequired,
  hdd: PropTypes.string.isRequired,
  ram: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  accessories: PropTypes.string.isRequired,
};
