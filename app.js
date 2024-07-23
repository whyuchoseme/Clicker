import {
  getRotate,
  plusOne,
  setStorageItem,
  checkStatus,
  getStorageItem,
} from "./utils.js";

const clickerButton = document.querySelector(".clicker__clicker-button");
const score = document.querySelector(".score__score-count");
const clickerImg = document.querySelector(".clicker__clicker-svg");
const clearButton = document.querySelector(".footer__clear-button");
const scoreImg = document.querySelector(".score__score-svg");

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
  if (count >= 1000) {
    scoreImg.setAttribute("src", "img/heart.svg");
  }
}

startApp();
