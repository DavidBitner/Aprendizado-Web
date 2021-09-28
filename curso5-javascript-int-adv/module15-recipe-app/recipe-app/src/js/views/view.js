import icons from "url:../../img/icons.svg";

export default class View {
  _data;

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0)) {
      return this.renderError();
    }

    this._data = data;
    const recipeHtml = this._generateHtml();
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", recipeHtml);
  }

  update(data) {
    this._data = data;
    const newHtml = this._generateHtml();

    const newDom = document.createRange().createContextualFragment(newHtml);
    const newElements = Array.from(newDom.querySelectorAll("*"));
    const curElements = Array.from(this._parentElement.querySelectorAll("*"));

    newElements.forEach((newElement, index) => {
      const curElement = curElements[index];

      // Update changed text
      if (
        !newElement.isEqualNode(curElement) &&
        newElement.firstChild?.nodeValue.trim() !== ""
      ) {
        curElement.textContent = newElement.textContent;
      }

      // Update changed attributes
      if (!newElement.isEqualNode(curElement)) {
        Array.from(newElement.attributes).forEach((attribute) => {
          curElement.setAttribute(attribute.name, attribute.value);
        });
      }
    });
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  renderSpinnerLoading() {
    const html = `
    <div class="spinner">
      <svg>
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div>
  `;

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", html);
  }

  renderError(errorMessage = this._errorMessage) {
    const html = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${errorMessage}</p>
      </div>
    `;

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", html);
  }

  renderMessage(message = this._message) {
    const html = `
      <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", html);
  }
}
