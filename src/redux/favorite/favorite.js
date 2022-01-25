const URL = 'http://localhost:3000/api/v1/favorites';

const addFavorite = (payload) => () => {
  fetch(URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
};

export default addFavorite;
