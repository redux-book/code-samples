import { handleActions } from 'redux-actions';
import { ADD_RECIPE, DEL_RECIPE, SET_RECIPES } from '../consts';

const initialState = [];

export default handleActions({
  [ADD_RECIPE]:  (recipes, action) => recipes.concat({ title: action.payload }),
  [DEL_RECIPE]:  (recipes, action) => recipes.filter(recipe => recipe.title !== action.payload),
  [SET_RECIPES]: (recipes, action) => action.payload
}, initialState);
