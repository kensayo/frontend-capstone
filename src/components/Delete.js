import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchComputers } from '../redux/computers/computers';
import ItemDelete from './itemDelete';
import '../App.css';

const Delete = () => {
  const dispatch = useDispatch();
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
    <div className="pt-4 mt-4 pt-sd-2 mt-sd-2 ">
      <h1 className="pt-md-5 mt-md-5">Delete Computers</h1>
      <ul className="list-group">
        {item}
      </ul>

    </div>
  );
};

export default Delete;
