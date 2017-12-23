const fetchRecipes = () => ({
  type: API_REQUEST,
  payload: {
    url: 'db.json',
    next: FETCH_RECIPES
  }
});
