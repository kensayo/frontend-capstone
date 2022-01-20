import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import computersReducer from './computers/computers';
import favoritesReducer from './favorite/favorite';
import computerReducer from './computers/computer';
import usersReducer from './users/users';

const reducers = combineReducers({
  computersReducer, favoritesReducer, computerReducer, usersReducer,
});

const store = createStore(
  reducers,
  applyMiddleware(logger, thunk),
);

export default store;
