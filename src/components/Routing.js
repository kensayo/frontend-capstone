import {
  BrowserRouter as Router, Routes,
} from 'react-router-dom';
import { Route } from 'react-router';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Favorite from './Favorite';
import Computer from './Computer';

const Routing = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/computer/:id" element={<Computer />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/fav" element={<Favorite />} />
    </Routes>
  </Router>
);

export default Routing;
