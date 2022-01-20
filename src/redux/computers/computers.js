const SET_COMPUTERS = 'frontend-capstone/computers/SET_COMPUTERS';
const URL = 'http://localhost:3000/api/v1';

const initialState = {
  computers: [],
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
