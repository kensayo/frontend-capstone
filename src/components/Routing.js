import {
  BrowserRouter as Router, Routes,
} from 'react-router-dom';
import { Route } from 'react-router';
import Login from './Login';
import Signup from './Signup';

const Routing = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
    </Routes>
  </Router>
);

export default Routing;
