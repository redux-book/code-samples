// Bad example #1: Running reducers in sequence
const recipesReducer     = (state, action) => {};
const ingredientsReducer = (state, action) => {};
const uiReducer          = (state, action) => {};

const reducer = (state, action) => {
  let newState = state;

  newState = recipesReducer(newState, action);
  newState = ingredientsReducer(newState, action);
  newState = uiReducer(newState, action);

  return newState;
};

// Bad example #2: Running reducers in sequence
const recipesReducer     = (recipes, action) => {};
const ingredientsReducer = (ingredients, action) => {};
const uiReducer          = (ui, action) => {};

const reducer = (state, action) => {
  const newState = Object.assign({}, state, {
    recipes: recipesReducer(state.recipes, action),
    ingredients: ingredientsReducer(state.ingredients, action),
    ui: uiReducer(state.ui, action)
  });

  return newState;
};
