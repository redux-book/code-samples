const initialState = {
  loading: false,
  list: []
};

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_RECIPES.PENDING:
      return Object.assign({}, state, {
        loading: true
      });

    case FETCH_RECIPES.SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        list: action.payload.recipes.map((recipe) => recipe.name)
      });

    case FETCH_RECIPES.ERROR:
      return Object.assign({}, state, {
        loading: false
      });

    default:
      return state;
  }
};
