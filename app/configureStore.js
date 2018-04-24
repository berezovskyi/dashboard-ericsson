/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk'
import { fromJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
import createReducer from './reducers';


const loggerMiddleware = createLogger();

export default function configureStore(initialState = {}, history) {
  const middlewares = [routerMiddleware(history), loggerMiddleware, thunkMiddleware];

  const enhancers = [applyMiddleware(...middlewares)];

  const composeEnhancers = process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      shouldHotReload: false,
    }) : compose;

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    composeEnhancers(...enhancers),
  );

  // Extensions
  store.injectedReducers = {}; // Reducer registry

  return store;
}
