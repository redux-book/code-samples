import 'whatwg-fetch';
import { createAction } from 'redux-actions';
import * as actions from 'consts';

export const addRecipe = title => ({
  type: actions.ADD_RECIPE,
  payload: title || "Default"
});

export const delRecipe = title => ({
  type: actions.DEL_RECIPE,
  payload: title
});

export const setRecipes = recipes => ({
  type: actions.SET_RECIPES,
  payload: recipes
});

export const fetchRecipes = () => ({
  type: actions.API,
  payload: {
    success: setRecipes,
    url: 'recipes.json'
  }
});

export const setRecipe = (id, data) => ({
  type: actions.SET_RECIPE,
  payload: {
    id,
    data
  }
});

export const fetchError = error => ({
  type: actions.FETCH_ERROR,
  error: true,
  payload: error
});

export const fetchRecipe = id => dispatch => {
  return axios.get('recipe/' + id)
    .then(response => dispatch(setRecipe(id, response.data)))
    .catch(({ status, statusText }) => dispatch(fetchError({ status, statusText })))
};
