const SET_COMPUTERS = 'frontend-capstone/computers/SET_COMPUTERS';
const URL = 'http://localhost:3000/api/v1';

const initialState = {
  computers: [],
};

const setComputers = (payload) => ({
  type: SET_COMPUTERS,
  payload,
});

export const fetchComputers = () => (dispatch) => {
  fetch(`${URL}/computers`)
    .then((response) => response.json())
    .then((data) => dispatch(setComputers(data)));
};

export const deleteComputer = (id) => (dispatch) => {
  fetch(`${URL}/computers/${id}`, { method: 'DELETE' })
    .then(() => fetchComputers(dispatch));
};

const computersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMPUTERS:
      return { ...state, computers: action.payload };
    default:
      return state;
  }
};

export default computersReducer;
