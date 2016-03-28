import { createStore, combineReducers, applyMiddleware } from 'redux';
import photographerReducer from './reducers/photographer';
import exampleReducer from './reducers/example';
import { apiMiddleware } from 'redux-api-middleware';

import { routerReducer, routerMiddleware } from 'react-router-redux';

export function configureStore(history, initialState) {
  const reducer = combineReducers({
    photographer: photographerReducer,
    example: exampleReducer,
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
