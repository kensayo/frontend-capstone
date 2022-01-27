// http://localhost:3000/api/v1/computers
const SET_COMPUTER = 'frontend-capstone/computer/SET_COMPUTER';
const URL = 'http://localhost:3000/api/v1/computers';

const initialState = {
  computer: [],
};
const setComputer = (payload) => ({
  type: SET_COMPUTER,
  payload,
});

export const fetchComputer = (id) => (dispatch) => {
  fetch(`${URL}/${id}`)
    .then((response) => response.json())
    .then((data) => dispatch(setComputer(data)));
};

export const addComputer = (processor, hdd, ram, price, brand, image, accessories) => () => {
  fetch(URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      computer: {
        processor,
        hdd,
        ram,
        price,
        brand,
        image,
        accessories,
      },
    }),
  });
};

export const deleteComputer = (id) => {
  fetch(`${URL}/${id}`, { method: 'DELETE' })
    .then(() => this.setState({ status: 'Delete successful' }));
};

const computerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMPUTER:
      return { ...state, computer: action.payload };
    default:
      return state;
  }
};

export default computerReducer;
