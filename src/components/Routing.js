import {
  BrowserRouter as Router, Routes,
} from 'react-router-dom';
import { Route } from 'react-router';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Computer from './Computer';
import Navbar from './Navbar';
import New from './New';
import Favorites from './Favorites';

const Routing = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/computer/:id" element={<Computer />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/nav" element={<Navbar />} />
      <Route exact path="/new" element={<New />} />

      <Route exact path="/del" />
      <Route exact path="/fav" element={<Favorites />} />

    </Routes>
  </Router>
);

export default Routing;
