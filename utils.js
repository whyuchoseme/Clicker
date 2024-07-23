export const getStorageItem = (itemKey) => localStorage.getItem(itemKey);

export const setStorageItem = (itemKey, itemValue) =>
  localStorage.setItem(itemKey, itemValue);

export const getRotate = (e, parentElement) => {
  const rect = parentElement.getBoundingClientRect();

  const offsetX = e.clientX - rect.left - rect.width / 2;
  const offsetY = e.clientY - rect.top - rect.height / 2;

  const DEG = 50;

  const tiltX = (offsetY / rect.height) * DEG;
  const tiltY = (offsetX / rect.width) * DEG;

  parentElement.style.setProperty("--tiltX", `${tiltX}deg`);
  parentElement.style.setProperty("--tiltY", `${tiltY}deg`);

  setTimeout(() => {
    parentElement.style.setProperty("--tiltX", `0deg`);
    parentElement.style.setProperty("--tiltY", `0deg`);
  }, 250);
};

export const plusOne = (e, parentElement, score) => {
  const plusOne = document.createElement("div");
  plusOne.classList.add("clicker__plus-one");
  plusOne.style.top = e.offsetY - 50 + "px";
  plusOne.style.left = e.offsetX + "px";
  plusOne.innerHTML = checkCount(score);
  parentElement.append(plusOne);

  setTimeout(() => {
    plusOne.remove();
  }, 2000);
};

export const checkStatus = (pointer, element) => {
  if (pointer >= 0) {
    element.setAttribute("src", "img/first.png");
  }
  if (pointer >= 50) {
    element.setAttribute("src", "img/second.png");
  }
  if (pointer >= 100) {
    element.setAttribute("src", "img/third.png");
  }
  if (pointer >= 500) {
    element.setAttribute("src", "img/fourth.png");
  }
  if (pointer >= 1000) {
    element.setAttribute("src", "img/last.png");
  }
  if (pointer >= 1010) {
    element.setAttribute("src", "img/simba.png");
  }
};

export const checkCount = (score) => {
  if (score >= 1000) {
    return `+1<img
      class="clicker__plus-one-svg"
      src="img/heart.svg"
      alt="Real Love"
    />`;
  } else {
    return `+1<img
  class="clicker__plus-one-svg"
  src="img/heart-crack.svg"
  alt="Broke Love"
  />`;
  }
};
