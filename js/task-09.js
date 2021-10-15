function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.body,
  btnChangeColor: document.querySelector(".change-color"),
  spanColor: document.querySelector(".color"),
};

refs.btnChangeColor.addEventListener("click", onBtnClick);

function onBtnClick() {
  const randomColor = (refs.body.style.backgroundColor = getRandomHexColor());

  refs.spanColor.textContent = randomColor;
}

console.log(refs.body);
