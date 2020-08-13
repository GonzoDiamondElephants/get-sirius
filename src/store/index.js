import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import studentReducer from './student/studentReducer.js';
import thunk from 'redux-thunk';

let reducers = {
  student: studentReducer,
};
const store = () =>
  createStore(
    combineReducers(reducers),
    composeWithDevTools(applyMiddleware(thunk))
  );
export default store();
