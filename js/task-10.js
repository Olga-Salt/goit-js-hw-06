function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxControls = document.querySelector("#controls");

const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const inputNamber = btnCreate.previousElementSibling;

const boxesContainer = document.querySelector("#boxes");

let countOfBox = [];

// inputNamber.addEventListener("input", onInputInput);

// function onInputInput() {
//   countOfBox.push(inputNamber.value);
//   console.log(countOfBox);
// }

btnCreate.addEventListener("click", onCreatClick);

function onCreatClick() {
  createBoxes();
}

function createBoxes(amount) {
  let murkup = `<div style =
    'background-color: ${getRandomHexColor()};
    height: 30px;
    width: 30px;'
></div>`;

  boxesContainer.insertAdjacentHTML("afterbegin", murkup);
}
