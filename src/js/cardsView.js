import icons from "url:../images/icon-ellipsis.svg";
import Views from "./View";

class CardsView extends Views {
  _parentEl = document.querySelector(".container-cards");

  addHandlerRender(handler) {
    ["load", "hashchange"].forEach((ev) =>
      window.addEventListener(ev, handler)
    );
  }

  _generateMarkup() {
    return this._data.map(this._generateCardMarkup).join("");
  }

  _generateCardMarkup(info) {
    return `<div class="card ${info.className}">
    <div class="card__content">
      <div class="card__category">
        <h2 class="card__title">${info.title}</h2>
        <a href="#${info.className}"
          ><img
            src="${icons}"
            alt="options"
            class="dots"
        /></a>
      </div>
      <h2 class="card__current">${info.selectTime.current}hrs</h2>
      <p class="card__previous">Last Week - ${info.selectTime.previous}hrs</p>
    </div>
    </div>`;
  }
}

export default new CardsView();
