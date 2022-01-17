import {
  BrowserRouter as Router, Routes,
} from 'react-router-dom';
import { Route } from 'react-router';
import Login from './Login';
import Signup from './Signup';
import Favorite from './Favorite';

const Routing = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/fav" element={<Favorite />} />
    </Routes>
  </Router>
);

export default Routing;
