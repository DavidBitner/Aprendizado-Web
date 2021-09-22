import * as model from "./model.js";
import recipeView from "./views/recipeView.js";

const recipeContainer = document.querySelector(".recipe");

// https://forkify-api.herokuapp.com/v2

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
    recipeView.renderError()
  }
}

function init() {
  recipeView.addHandlerRender(controlRecipes);
}

init();
