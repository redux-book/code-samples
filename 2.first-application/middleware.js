const logMiddleware = ({ getState, dispatch }) => (next) => (action) => {
  console.log(`Action: ${ action.type }`);

  next(action);
};

const URL = 'db.json';

function fetchData(url, callback) {
  axios.get(url)
    .then(callback)
    .catch((err) => console.log(`Error fetching recipes: ${ err }`))
}

const apiMiddleware = ({ dispatch }) => next => action => {
  if (action.type === FETCH_RECIPES) {
    fetchData(URL, ({ data }) => dispatch(setRecipes(data)));
  }

  next(action);
};
