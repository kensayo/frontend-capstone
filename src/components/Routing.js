import {
  BrowserRouter as Router, Routes,
} from 'react-router-dom';
import { Route } from 'react-router';
import Login from './Login';

const Routing = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Login />} />
    </Routes>
  </Router>
);

export default Routing;
