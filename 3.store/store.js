import { createStore } from 'redux';

const initialState = {
  recipes: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return Object.assign({}, state, {
        recipes: state.recipes.concat(action.payload)
      });

    default:
      return state;
  }
};

// Creating the store
const store = createStore(reducer, initialState);

// Accessing data in store
store.getState();

// Dispatching actions to store
const action = {
  type: 'ADD_RECIPE',
  payload: {
    name: 'Omelette'
  }
};

store.dispatch(action);

// Listening to state changes
const onStoreChange = () => console.log(store.getState());
const unsubscribe = store.subscribe(onStoreChange);

// Unsubscribing from state changes
unsubscribe();
