import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import computersReducer from './computers/computers';
import favoritesReducer from './favorite/favorite';
import computerReducer from './computers/computer';
import userReducer from './users/user';

const reducers = combineReducers({
  computersReducer, computerReducer, userReducer, favoritesReducer,
});

const store = createStore(
  reducers,
  applyMiddleware(logger, thunk),
);

export default store;
