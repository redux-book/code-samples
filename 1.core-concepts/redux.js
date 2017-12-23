function createStore(reducer, initialState) {
  let state = initialState;
  const listeners = [];

  function getState() {
    return state;
  }

  function subscribe(callback) {
    listeners.push(callback);
  }

  function dispatch(action) {
    const newState = reducer(state, action);

    if (newState !== state) {
      state = newState;
      listeners.forEach(listener => listener());
    }
  }

  return {
    getState,
    dispatch,
    subscribe
  };
}
