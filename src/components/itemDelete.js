import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteComputer } from '../redux/computers/computer';

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
  return (
    <li>
      <div className="d-flex flex-row my-4">
        <p className="mx-3">Item</p>
        <p className="mx-3">{brand}</p>
        <p className="mx-3">{accessories}</p>
        <p className="mx-3">{hdd}</p>
        <p className="mx-3">{price}</p>
        <p className="mx-3">{processor}</p>
        <p className="mx-3">{ram}</p>
        <button className="mx-3" type="button" onClick={() => remove(id)}>Delete</button>
      </div>
    </li>
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
