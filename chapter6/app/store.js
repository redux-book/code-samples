import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer   from 'reducers/root';
import logMiddleware from 'middleware/log';
import apiMiddleware from 'middleware/api';

const store = createStore(rootReducer, applyMiddleware(
  thunk,
  // logMiddleware,
  apiMiddleware
));

export default store;