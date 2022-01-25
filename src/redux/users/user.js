const POST_USER = 'frontend-capstone/user/POST_USER';
const POST_USER_SUCCESS = 'frontend-capstone/user/POST_USER_SUCCESS';
const POST_USER_ERRORS = 'frontend-capstone/user/POST_USER_ERRORS';
const POST_USER_FAILURE = 'frontend-capstone/user/POST_USER_FAILURE';
const URL = 'http://localhost:3000/api/v1/users';

const initialState = {
  isLoading: false,
  error: '',
  errors: [],
  user: {},
  loggedIn: false,
};

export const signupUser = ({ username, email, password }) => (dispatch) => {
  // console.log(user_name)
  dispatch({ type: POST_USER });

  fetch(URL, {
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

const userReducer = (state = initialState, action) => {
  let user = {};
  switch (action.type) {
    case POST_USER:
      return { ...state, isLoading: true };

    case POST_USER_SUCCESS:
      user = action.payload.user;
      return {
        ...state, isLoading: false, user, loggedIn: true,
      };

    case POST_USER_FAILURE:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};
export default userReducer;
