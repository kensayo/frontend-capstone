// /api/v1/users
import axios from 'axios';

const GET_USERS = 'GET_USERS';
const API_URL = 'http://localhost:3001/api/v1/users';

const initialState = [];

export const getComputers = () => async (dispatch) => {
  await axios.get(API_URL, {
    method: 'GET',
  })
    .then((response) => {
      dispatch({
        type: GET_USERS,
        payload: response,
      });
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      // console.log(action.payload.data);
      return action.payload.data;
    default:
      return state;
  }
};
export default reducer;
