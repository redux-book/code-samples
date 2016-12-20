const store = Redux.createStore(
  rootReducer,
  Redux.applyMiddleware(logMiddleware, apiMiddleware)
);

$(loadUI);

setTimeout(() => store.dispatch(fetchRecipes()), 1000);