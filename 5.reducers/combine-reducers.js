import { combineReducers } from 'redux';

import recipes from 'reducers/recipes';
import ingredients from 'reducers/ingredients';
import ui from 'reducers/ui';

export default combineReducers({
  recipes,
  ingredients,
  ui
});
