/* eslint-disable camelcase */
const URL = 'http://localhost:3000/api/v1/favorites';
const SET_FAVORITES_FROM_USER = 'frontend-capstone/favorite/SET_FAVORITES_FROM_USER';
const URL_USER = 'http://localhost:3000/api/v1/users';

const initialState = {
  favorites: [],
};

const setFavorites = (payload) => ({
  type: SET_FAVORITES_FROM_USER,
  payload,
});

export const fetchFavoritesfromUser = (id) => (dispatch) => {
  fetch(`${URL_USER}/${id}`)
    .then((response) => response.json())
    .then((data) => dispatch(setFavorites(data.computers)));
};

export const addFavorite = (user_id, computer_id) => () => {
  fetch(URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      favorite: {
        user_id,
        computer_id,
      },
    }),
  });
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAVORITES_FROM_USER:
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
};
export default favoritesReducer;
