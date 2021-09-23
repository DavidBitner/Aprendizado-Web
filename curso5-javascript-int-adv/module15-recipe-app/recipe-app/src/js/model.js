import { API_URL } from "./config.js";
import { getJSON } from "./helpers.js";

export let state = {
  recipe: {},
  search: {
    query: "",
    results: [],
  },
};

export async function loadRecipe(recipeId) {
  try {
    const data = await getJSON(`${API_URL}/${recipeId}`);

    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  } catch (error) {
    throw error;
  }
}

export async function loadSearchResults(query) {
  try {
    state.search.query = query;

    const data = await getJSON(`${API_URL}?search=${query}`);

    state.search.results = data.data.recipes.map((recipe) => {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
      };
    });

    console.log(state.search.results);
  } catch (error) {
    throw error;
  }
}
