import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import { signinUser } from '../redux/users/user';
import './assets/login.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username,
      email,
    };

    dispatch(signinUser(user));
    navigate('/');
    setUserName('');
    setEmail('');
  };

  return (
    <div className="logIn d-flex flex-column justify-content-center align-items-center">
      <div className="header text-white p-5">
        <h1>Log In</h1>
        <p>Hello there! Sign in here</p>
      </div>
      <div className="form">
        <form className="input-group" onSubmit={handleSubmit}>
          <div className="flex-column">
            <div className="flex-column p-2">
              <input className="row logName" type="text" name="username" onChange={handleUserName} value={username} placeholder="userName" />
            </div>
            <div className="flex-column p-2">
              <input className="row logName" type="email" name="email" onChange={handleEmail} value={email} placeholder="email" />
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
