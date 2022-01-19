import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import favoritesReducer from './favorite/favorite';
import computersReducer from './items/item';
import usersReducer from './users/users';

const reducer = combineReducers({
  favoritesReducer, computersReducer, usersReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
