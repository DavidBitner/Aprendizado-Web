import * as model from "./model.js";
import recipeView from "./views/recipeView.js";

const recipeContainer = document.querySelector(".recipe");

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

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
    alert(error);
  }
}

["hashchange", "load"].forEach((event) =>
  window.addEventListener(event, controlRecipes)
);
