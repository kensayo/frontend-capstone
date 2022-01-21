import {
  BrowserRouter as Router, Routes,
} from 'react-router-dom';
import { Route } from 'react-router';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Favorite from './Favorite';
import Navbar from './Navbar';

const Routing = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/fav" element={<Favorite />} />
      <Route exact path="/nav" element={<Navbar />} />
    </Routes>
  </Router>
);

export default Routing;
