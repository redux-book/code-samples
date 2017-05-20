const renderRecipe = (recipeId) => {
  const recipe = store.getState().recipes[recipeId];
  const author = store.getState().users[recipe.author];

  return `<li><b>${ recipe.name }</b> by <i>${ author.name }</i></li>`;
};

const updateUI = () => {
  const list = Object.keys(store.getState().recipes);

  $('.recipes > ul').html(list.map(renderRecipe));
};

const loadUI = () => {
  $('#app').append(`
    <div class="recipes">
      <h2>Recipes:</h2>
      <ul></ul>
    </div>
  `);

  store.subscribe(updateUI);

  updateUI();
};