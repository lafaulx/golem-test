import { createStore, combineReducers, applyMiddleware } from 'redux';
import golemReducer from './reducers/golem';
import example1Reducer from './reducers/example1';
import { apiMiddleware } from 'redux-api-middleware';

import { routerReducer, routerMiddleware } from 'react-router-redux';

export function configureStore(history, initialState) {
  const reducer = combineReducers({
    golem: golemReducer,
    example1: example1Reducer,
    routing: routerReducer,
  });

  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(
      apiMiddleware,
      routerMiddleware(history)
    )
  );

  return store;
}
