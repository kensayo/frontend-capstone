import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import '../App.css';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const dispatch = useDispatch();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassWord = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="logIn d-flex flex-column justify-content-center align-items-center">
      <div className="header text-white p-5">
        <h1>Log In</h1>
        <p>Hello there! Sign in here</p>
      </div>
      <div className="form">
        <form className="input-group">
          <div className="flex-column">
            <div className="flex-column p-2">
              <input className="row logName" type="email" name="email" onChange={handleEmail} value={email} placeholder="email" />
            </div>
            <div className="flex-column p-2">
              <input className="row logName" type="password" name="password" onChange={handlePassWord} value={password} placeholder="password" />
            </div>
            <div className="flex-column p-2">
              <input className="row submitBtn" type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </div>
      <div className="forgot text-white p-5">
        <p>Forgot Password?</p>
        <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
};

export default Login;
