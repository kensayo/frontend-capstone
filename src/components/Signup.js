import { Link } from 'react-router-dom';
import '../App.css';
import './login.css';

const Signup = () => (
  <div className="logIn d-flex flex-column justify-content-center align-items-center">
    <div className="header text-white p-5">
      <h1>Sign Up</h1>
      <p>Create an account here</p>
    </div>
    <div className="form">
      <form className="input-group">
        <div className="flex-column">
          <div className="flex-column p-2">
            <input className="row logName" type="text" name="username" />
          </div>
          <div className="flex-column p-2">
            <input className="row submitBtn" type="submit" value="Submit" />
          </div>
        </div>
      </form>
    </div>
    <div className="forgot text-white p-5">
      <p>Forgot Password?</p>
      <Link to="/">Log In</Link>
    </div>
  </div>
);

export default Signup;
