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
  plusOne.classList.add("plus-one");
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
    element.setAttribute("src", "img/queen.png");
  }
  if (pointer >= 20) {
    element.setAttribute("src", "img/king.png");
  }
  if (pointer >= 500) {
    element.setAttribute("src", "img/love.png");
  }
};

export const checkCount = (score) => {
  if (score >= 500) {
    return `+1<img
      class="heart-crack"
      src="img/heart.svg"
      alt="broke love"
    />`;
  } else {
    return `+1<img
  class="heart-crack"
  src="img/heart-crack.svg"
  alt="broke love"
  />`;
  }
};
