import { createStore } from 'redux';
import rootReducer from 'reducers/root';

const persistStore = (next) => (reducer, initialState, enhancer) => {
  let store;

  if (typeof initialState !== 'function') {
    store = next(reducer, initialState, enhancer);
  } else {
    const preloadedState = initialState ||
                           JSON.parse(localStorage.getItem('@@PersistedState') || {});

    store = next(reducer, preloadedState, enhancer);
  }

  store.subscribe(() => localStorage.setItem(
    '@@PersistedState',
    JSON.stringify(store.getState())
  ));

  return store;
};

const store = createStore(rootReducer, persistStore);
