const addRecipe = (name) => ({
  type: ADD_RECIPE,
  name
});

const setRecipes = (data) => ({
  type: SET_RECIPES,
  payload: data
});

const fetchRecipes = () => ({
  type: FETCH_RECIPES
});
