import '../App.css';

const Login = () => (
  <div className="logIn d-flex flex-column justify-content-center align-items-center">
    <div className="header">
      <h1>Log In</h1>
      <p>Hello there! Sign in here</p>
    </div>
    <div className="form">
      <form>
        <input type="text" name="email" />
        <input type="submit" value="Submit" />
      </form>
    </div>
    <div className="forgot">
      <p>Forgot Password?</p>
    </div>
  </div>
);

export default Login;
