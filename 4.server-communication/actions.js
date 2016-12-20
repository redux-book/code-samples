const fetchRecipes = () => ({
  type: API_REQUEST,
  payload: {
    url: 'https://s3.amazonaws.com/500tech-shared/db.json',
    next: FETCH_RECIPES
  }
});
