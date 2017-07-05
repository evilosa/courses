import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { hashHistory } from 'react-router';
import { autoRehydrate } from 'redux-persist';
import rootReducer from '../reducers/reducers';

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
  compose(
    applyMiddleware(thunk, routerMiddleware(hashHistory)),
    autoRehydrate()
  )
);

export default configureStore;