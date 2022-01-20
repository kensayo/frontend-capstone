import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import computersReducer from './computers/computers';

const reducers = combineReducers({
  computersReducer,
});

const store = createStore(
  reducers,
  applyMiddleware(logger, thunk),
);
export default store;
