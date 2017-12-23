import reducer from 'reducers/recipes';
import deepFreeze from 'deep-freeze';
import { addRecipe, delRecipe } from 'actions/recipes';

const initialState = deepFreeze(reducer(undefined, { type: 'INIT' }));

describe('recipes reducer', () => {

  it('should handle unknown actions', () => {
    expect(reducer(initialState, { type: 'FAKE' })).toBe(initialState);
  });

  describe('add action', () => {
    it('should add recipe to empty list', () => {
      expect(reducer(initialState, addRecipe('test'))).toMatchSnapshot()
    });

    it('should add recipe to a non-empty list', () => {
      const nonEmptyState = deepFreeze(reducer(initialState, addRecipe('first')));

      expect(reducer(nonEmptyState, addRecipe('test'))).toMatchSnapshot();
    });
  });

  describe('delete action', () => {
    // Create list of 3 recipes
    const baseState = deepFreeze(
      ['first', 'second', 'third']
        .reduce((state, recipe) => reducer(state, addRecipe(recipe)), initialState)
    );

    it('should delete recipe when exists', () => {
      expect(reducer(baseState, delRecipe('second'))).toMatchSnapshot();
    });

    it('should not delete recipe when it doesn\'t exist', () => {
      expect(reducer(baseState, delRecipe('fourth'))).toMatchSnapshot();
    });
  });
});