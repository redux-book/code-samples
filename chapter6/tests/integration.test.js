import store from 'store';
import { fetchRecipes } from 'actions/recipes';
import { mockFetch } from 'test-utils';

describe('integration', () => {
  it('should fetch recipes from server', () => {
    const data = [{ title: 'test' }];

    expect(store.getState().recipes).toEqual([]);

    mockFetch('recipes.json', 200, JSON.stringify(data));

    return store.dispatch(fetchRecipes())
      .then(() => expect(store.getState().recipes).toEqual(data));
  });
});
