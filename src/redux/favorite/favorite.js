const URL = 'http://localhost:3000/api/v1/favorites';
/* eslint-disable camelcase */
const addFavorite = (user_id, computer_id) => () => {
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

export default addFavorite;
