import { async } from "regenerator-runtime";
import data from "../data.json";
export const state = {
  currentTime: "daily",
  selectedTimes: [],
};

const editTitle = function (name) {
  return name.toLowerCase().split(" ").join("-");
};

export const loadTimer = function (time = state.currentTime) {
  state.currentTime = time;
  localStorage.setItem("currentTime", JSON.stringify(state.currentTime));

  try {
    const results = data.map((result) => {
      return {
        title: result.title,
        selectTime: result.timeframes[`${state.currentTime}`],
        className: editTitle(result.title),
      };
    });

    state.selectedTimes = results;
  } catch (err) {
    console.error(err);
  }
};

const init = function () {
  const storage = localStorage.getItem("currentTime");
  if (storage) state.currentTime = JSON.parse(storage);
};

init();
