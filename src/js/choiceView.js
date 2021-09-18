import icons from "url:../images/icon-ellipsis.svg";
import Views from "./View";

class ChoiceView extends Views {
  _parentEl = document.querySelector(".profile__items");

  _generateMarkup() {
    return ` 
    <li class="profile__item">
      <a href="#daily" class="profile__link ${
        this._data === "daily" ? "active" : ""
      }"
        >Daily</a
      >
    </li>
    <li class="profile__item">
      <a href="#weekly" class="profile__link  ${
        this._data === "weekly" ? "active" : ""
      }"
        >Weekly</a
      >
    </li>
    <li class="profile__item">
      <a href="#monthly" class="profile__link  ${
        this._data === "monthly" ? "active" : ""
      }"
        >Monthly</a
      >
    </li>`;
  }
}

export default new ChoiceView();
