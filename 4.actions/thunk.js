import { trimmedTitle } from 'utils/strings';
import { ADD_RECIPE_STARTED } from 'actions/recipes';

function addRecipe(title) {
  return function (dispatch, getState) {
    const trimmedTitle = trimTitle(title);

    dispatch({ type: ADD_RECIPE_STARTED });

    setTimeout(
      () => dispatch({ type: ADD_RECIPE, title: trimmedTitle }),
      1000
    );
  }
}
