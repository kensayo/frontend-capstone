import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteComputer } from '../redux/computers/computers';
import './assets/delete.css';

const ItemDelete = (props) => {
  const {
    id,
    processor,
    hdd,
    ram,
    price,
    brand,
    accessories,
  } = props;
  const dispatch = useDispatch();
  const remove = (id) => {
    dispatch(deleteComputer(id));
  };

  const deleteClass = (id) => {
    document.getElementById(id).className = 'delete';
  };
  return (
    <ul className="list-group p-2" id={`${id}`}>
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
        <button className="fill" type="button" onClick={() => { remove(id); deleteClass(id); }}>Delete</button>
      </li>
    </ul>
  );
};

export default ItemDelete;

ItemDelete.propTypes = {
  id: PropTypes.number.isRequired,
  processor: PropTypes.number.isRequired,
  hdd: PropTypes.number.isRequired,
  ram: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  brand: PropTypes.string.isRequired,
  accessories: PropTypes.string.isRequired,
};
