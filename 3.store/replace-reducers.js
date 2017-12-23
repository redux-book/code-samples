import { combineReducers } from 'redux';
import { currentUser } from 'reducers/current-user';
import { recipes } from 'reducers/recipes';

const reducer = combineReducers({ currentUser });
const newReducer = combineReducers({ currentUser, recipes });

const store = createStore(reducer);

store.replaceReducer(newReducer);
