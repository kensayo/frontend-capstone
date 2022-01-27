import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import './assets/login.css';
import { signupUser } from '../redux/users/user';

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassWord = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      username,
      email,
      password,
    };

    dispatch(signupUser(user));
    navigate('/');
    setUserName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="logIn d-flex flex-column justify-content-center align-items-center">
      <div className="header text-white p-5">
        <h1>Sign Up</h1>
        <p>Create an account here</p>
      </div>
      <div className="form">
        <form className="input-group" onSubmit={handleSubmit}>
          <div className="flex-column">
            <div className="flex-column p-2">
              <input className="row logName" type="text" onChange={handleUserName} value={username} placeholder="username" />
            </div>
            <div className="flex-column p-2">
              <input className="row logName" type="email" onChange={handleEmail} value={email} placeholder="email" />
            </div>
            <div className="flex-column p-2">
              <input className="row logName" type="password" onChange={handlePassWord} value={password} placeholder="password" />
            </div>
            <div className="flex-column p-2">
              <input className="row submitBtn" type="submit" />
            </div>
          </div>
        </form>
      </div>
      <div className="forgot text-white p-5">
        <p>Forgot Password?</p>
        <Link to="/login">Log In</Link>
      </div>
    </div>
  );
};

export default Signup;
