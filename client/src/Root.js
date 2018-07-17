import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './store/reducers';

const composedEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    composedEnhancers(applyMiddleware(reduxThunk))
  );

  return <Provider store={store}>{children}</Provider>;
};
