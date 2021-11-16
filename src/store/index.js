import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import debugMiddleWare from '../middlewares/debug';

const store = createStore(
  reducer,
  // redux devtool = middleware, permet d'amélioirer le store
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

  applyMiddleware(debugMiddleWare),

);
export default store;
