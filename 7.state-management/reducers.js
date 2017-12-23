const reducer = (state, action) => {
  switch (action.type) {

    case 'SET_RECIPES':
      return Object.assign({}, state, {
        recipes: action.payload
      });

    case 'SET_USERS':
      return Object.assign({}, state, {
        users: action.payload
      });

    default:
      return state;
  }
};