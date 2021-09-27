import * as model from "./model.js";
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView.js";

if (module.hot) {
  module.hot.accept();
}

async function controlRecipes() {
  try {
    const recipeId = window.location.hash.slice(1);

    if (!recipeId) {
      return;
    }

    recipeView.renderSpinnerLoading();

    // Recipe load
    await model.loadRecipe(recipeId);
    const { recipe } = model.state;

    // Recipe render
    recipeView.render(model.state.recipe);
  } catch (error) {
    recipeView.renderError();
  }
}

async function controlSearchResults() {
  try {
    resultsView.renderSpinnerLoading();

    const query = searchView.getQuery();
    if (!query) {
      return;
    }

    await model.loadSearchResults(query);

    resultsView.render(model.getSearchResultsPage());
  } catch (error) {
    console.log(error);
  }
}

function init() {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
}

init();
