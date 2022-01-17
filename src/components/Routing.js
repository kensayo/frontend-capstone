import {
  BrowserRouter as Router, Routes,
} from 'react-router-dom';
import { Route } from 'react-router';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

const Routing = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
    </Routes>
  </Router>
);

export default Routing;
