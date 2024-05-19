import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import { thunk } from 'redux-thunk';

const store = createStore(
  rootReducer,// thunk をミドルウェアとして適用
  applyMiddleware(thunk)
);

export default store;