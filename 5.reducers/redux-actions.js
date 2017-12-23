import { handleActions } from 'redux-actions';
import { ADD_RECIPE, REMOVE_RECIPE } from 'constants/actionTypes';

const initialState = [];

const recipesReducer = handleActions({
  [ADD_RECIPE]: (recipes, action) =>
    recipes.concat(action.payload),

  [REMOVE_RECIPE]: (recipes, action) =>
    recipes.filter(recipe => recipe.id === action.payload)

}, initialState);
