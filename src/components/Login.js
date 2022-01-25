import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import '../App.css';
import { signinUser } from '../redux/users/user';
import './login.css';

const Login = () => {
  const signedinUser = useSelector((state) => state.userReducer.user);
  console.log(signedinUser.id, 'hello');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username,
      password,
    };

    dispatch(signinUser(user));

    setUserName('');
    setPassword('');
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
              <input className="row logName" type="password" name="password" onChange={handlePassword} value={password} placeholder="password" />
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
