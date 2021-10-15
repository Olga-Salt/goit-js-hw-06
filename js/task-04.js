let counterValue = 0;

const refs = {
  btnDecrement: document.querySelector('[data-action="decrement"]'),
  btnIncrement: document.querySelector('[data-action="increment"]'),
  counterValue: document.querySelector("#value"),
};

refs.btnDecrement.addEventListener("click", onDecrementClick);
refs.btnIncrement.addEventListener("click", onIncrementClick);

function onDecrementClick() {
  refs.counterValue.textContent = counterValue -= 1;
}

function onIncrementClick() {
  refs.counterValue.textContent = counterValue += 1;
}
