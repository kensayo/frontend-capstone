// http://localhost:3000/api/v1/favorites
import axios from 'axios';

const GET_FAVORITES = 'GET_FAVORITES';
const API_URL = 'http://localhost:3001/api/v1/favorites';

const initialState = [];

export const getFavorites = () => async (dispatch) => {
  await axios.get(API_URL, {
    method: 'GET',
  })
    .then((response) => {
      dispatch({
        type: GET_FAVORITES,
        payload: response,
      });
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FAVORITES:
      // return action.payload.data.sort(() => 0.5 - Math.random());
      // console.log(action.payload.data);
      return action.payload.data;
    default:
      return state;
  }
};
export default reducer;
