const store = Redux.createStore(recipesReducer, Redux.applyMiddleware(apiMiddleware));

// Update view (this might be React in a real app)
function updateView() {
  if (store.getState().loading) {
    document.getElementById('recipe-list').innerText = 'Loading...';
  } else {
    document.getElementById('recipe-list').innerText = JSON.stringify(store.getState().list);
  }
}

store.subscribe(updateView);

// Update view for the first time
updateView();

// Listen to click events
document.getElementById('fetch-recipes').onclick = () => store.dispatch(fetchRecipes());
