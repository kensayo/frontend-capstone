// http://localhost:3000/api/v1/computers
import axios from 'axios';

const GET_COMPUTERS = 'GET_COMPUTERS';
const API_URL = 'http://localhost:3001/api/v1/computers';

const initialState = [];

export const getComputers = () => async (dispatch) => {
  await axios.get(API_URL, {
    method: 'GET',
  })
    .then((response) => {
      dispatch({
        type: GET_COMPUTERS,
        payload: response,
      });
    });
};

const ComputerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPUTERS:
      console.log(action.payload.data);
      return action.payload.data;
    default:
      return state;
  }
};
export default ComputerReducer;
