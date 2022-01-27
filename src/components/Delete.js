import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchComputers } from '../redux/computers/computers';
import ItemDelete from './itemDelete';
import '../App.css';

const Delete = () => {
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.userReducer.user);
  useEffect(() => {
    dispatch(fetchComputers());
  }, []);
  const item = [];
  const computersState = useSelector((state) => state.computersReducer.computers);
  Object.entries(computersState).forEach((computer) => {
    const [key, value] = computer;
    item.push(
      <ItemDelete
        key={key}
        price={value.price}
        brand={value.brand}
        accessories={value.accessories}
        hdd={value.hdd}
        processor={value.processor}
        ram={value.ram}
        id={value.id}
      />,
    );
  });
  return (
    <div>
      <h1 className="pt-4 mt-4">Delete Computers</h1>
      <ul className="list-group">
        {item}
      </ul>

    </div>
  );
};

/*
{
  (user)
    ? <div>{item}</div> : <div> Please signup or signin </div>
}
*/
export default Delete;
