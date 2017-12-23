import { createAction } from 'redux-actions';
import { ADD_RECIPE } from 'constants/actionTypes';

// Simple example:
const addRecipePayload = (title) => ({ title });
export const addRecipe = createAction(ADD_RECIPE, addRecipePayload);

// Static metadata:
export const addRecipe = createAction(
  ADD_RECIPE,
  (title) => ({ title }),
  { silent: true }
);

// Dynamic metadata:
const addRecipeMetadata = (title) => ({
  silent: true,
  notifyAdmin: title === 'Omelette'
});

export const addRecipe = createAction(
  ADD_RECIPE,
  (title) => ({ title }),
  addRecipeMetadata
);
