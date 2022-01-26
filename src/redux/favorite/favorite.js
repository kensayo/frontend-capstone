const URL = 'http://localhost:3000/api/v1/favorites';

const addFavorite = (user, computer) => () => {
  fetch(URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      user,
      computer,
    }),
  });
};

export default addFavorite;
