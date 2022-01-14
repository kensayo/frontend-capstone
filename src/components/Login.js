import '../App.css';
import './login.css';

const Login = () => (
  <div className="logIn d-flex flex-column justify-content-center align-items-center">
    <div className="header p-5">
      <h1>Log In</h1>
      <p>Hello there! Sign in here</p>
    </div>
    <div className="form p-5">
      <form>
        <div className="flex-column">
          <input className="row logName" type="text" name="email" />
          <input className="row submitBtn" type="submit" value="Submit" />
        </div>
      </form>
    </div>
    <div className="forgot p-5">
      <p>Forgot Password?</p>
    </div>
  </div>
);

export default Login;
