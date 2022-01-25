const LOADING_USER = 'frontend-capstone/user/LOADING_USER';
const POST_USER_SUCCESS = 'frontend-capstone/user/POST_USER_SUCCESS';
const POST_USER_ERRORS = 'frontend-capstone/user/POST_USER_ERRORS';
const POST_USER_FAILURE = 'frontend-capstone/user/POST_USER_FAILURE';
const SIGN_IN_SUCCESS = 'frontend-capstone/user/SIGN_IN_SUCCESS';
const SIGN_IN_ERRORS = 'frontend-capstone/user/SIGN_IN_ERRORS';
const SIGN_IN_FAILURE = 'frontend-capstone/user/SIGN_IN_FAILURE';
const URL = 'http://localhost:3000/api/v1';

const initialState = {
  isLoading: false,
  error: '',
  errors: [],
  user: {},
  loggedIn: false,
};

export const signupUser = ({ username, email, password }) => (dispatch) => {
  dispatch({ type: LOADING_USER });

  fetch(`${URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      username,
      email,
      password_digest: password,

    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.user !== undefined) {
        localStorage.setItem('token', data.jwt);
        alert('Successfully Signed Up');
        return dispatch({ type: POST_USER_SUCCESS, payload: data });
      }
      alert(data.errors.map((error) => error));
      return dispatch({ type: POST_USER_ERRORS, payload: data });
    })
    .catch((err) => {
      alert('Unable to SignUp At This Time');
      return dispatch({ type: POST_USER_FAILURE, payload: err });
    });
};

export const signinUser = ({ username, password }) => (dispatch) => {
  dispatch({ type: LOADING_USER });

  fetch(`${URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: window.localStorage.getItem('token'),
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.failure) {
        alert(data.failure);
      }

      if (data.user !== undefined) {
        localStorage.setItem('token', data.jwt);
        alert(data.success);
        return dispatch({ type: SIGN_IN_SUCCESS, payload: data });
      }
      alert(data.errors.map((error) => error));
      return dispatch({ type: SIGN_IN_ERRORS, payload: data });
    })
    .catch((err) => {
      alert('Unable to SignIn At This Time');
      return dispatch({ type: SIGN_IN_FAILURE, payload: err });
    });
};

const userReducer = (state = initialState, action) => {
  let user = {};
  let signinUser = {};
  switch (action.type) {
    case LOADING_USER:
      return { ...state, isLoading: true };

    case POST_USER_SUCCESS:
      user = action.payload.user;
      return {
        ...state, isLoading: false, user, loggedIn: true,
      };

    case POST_USER_FAILURE:
      return { ...state, isLoading: false, error: action.payload };

    case SIGN_IN_SUCCESS:
      signinUser = action.payload.user;
      return {
        ...state, isLoading: false, user: signinUser, loggedIn: true,
      };

    case SIGN_IN_ERRORS:
      return { ...state, isLoading: false, errors: action.payload.errors };

    case SIGN_IN_FAILURE:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};
export default userReducer;
