import "core-js/stable";
import { async } from "regenerator-runtime";
import "regenerator-runtime/runtime";
import cardsView from "./cardsView.js";
import choiceView from "./choiceView.js";

import * as model from "./model.js";

const controlCards = function () {
  let id = window.location.hash.slice(1);
  if (!id) id = model.state.currentTime;

  model.loadTimer(id);
  choiceView.render(model.state.currentTime);
  cardsView.update(model.state.selectedTimes);
};

const startApp = function () {
  model.loadTimer();
  choiceView.render(model.state.currentTime);
  cardsView.render(model.state.selectedTimes);
};

const init = function () {
  startApp();

  cardsView.addHandlerRender(controlCards);
};

init();
