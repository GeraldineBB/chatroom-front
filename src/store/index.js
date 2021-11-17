import { createStore, applyMiddleware, compose } from 'redux';
import reducer from 'src/reducers';
import apiMiddleWare from '../middlewares/api';
import debugMiddleWare from '../middlewares/debug';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [debugMiddleWare, apiMiddleWare];

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(...middlewares),
  ),
);

export default store;

// redux devtool = middleware, permet d'amélioirer le store
