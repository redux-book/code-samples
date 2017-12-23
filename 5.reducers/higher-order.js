import { combineReducers } from 'redux';
import { ignoreActions } from 'redux-ignore';
import undoable from 'redux-undo';

const rootReducer = combineReducers({
  recipes: undoable(recipesReducer),
  ingredients: ignoreActions(ingredientsReducer, [REMOVE_RECIPE])
});
