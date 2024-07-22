import {
  getStorageItem,
  checkStatus,
  getRotate,
  plusOne,
  setStorageItem,
} from "./utils.js";

const scoreImg = document.querySelector(".score-svg");
const score = document.querySelector(".score");
const clickerButton = document.querySelector(".clicker-button");
const clickerImg = document.querySelector(".clicker-svg");
const clearButton = document.querySelector(".clear-button");
let count = 0;

clickerButton.addEventListener("click", (event) => {
  getRotate(event, clickerButton);
  plusOne(event, clickerButton, count);

  count += 1;
  score.textContent = count;
  setStorageItem("score", count);

  checkScore(count);
  checkStatus(count, clickerImg);
});

clearButton.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});

function startApp() {
  getStorageItem("score")?.length
    ? (count = Number(getStorageItem("score")))
    : (count = 0);
  score.textContent = count;
  checkScore(count);
  checkStatus(count, clickerImg);
}

function checkScore(count) {
  if (count >= 500) {
    scoreImg.setAttribute("src", "img/heart.svg");
  }
}

startApp();
