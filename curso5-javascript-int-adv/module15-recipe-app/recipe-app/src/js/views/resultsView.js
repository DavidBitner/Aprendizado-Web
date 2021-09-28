import View from "./view.js";
import icons from "url:../../img/icons.svg";

class ResultsView extends View {
  _parentElement = document.querySelector(".results");
  _errorMessage = "No recipes found for your search! Please try again!";
  _message = "";

  _generateHtml() {
    return this._data.map(this._generateHtmlPreview).join("");
  }

  _generateHtmlPreview(result) {
    const id = window.location.hash.slice(1);

    return `
      <li class="preview">
        <a class="preview__link ${
          result.id === id ? "preview__link--active" : ""
        }" href="#${result.id}">
          <figure class="preview__fig">
            <img src="${result.image}" alt="${
      result.title
    }" class="recipe__img" crossOrigin= "anonymous"/>
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${result.title}</h4>
            <p class="preview__publisher">${result.publisher}</p>
          </div>
        </a>
      </li>
    `;
  }
}

export default new ResultsView();
