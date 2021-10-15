const refs = {
  input: document.querySelector("#name-input"),
  titleSpan: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputClick);

function onInputClick(event) {
  const inputValue = event.currentTarget.value;

  refs.titleSpan.textContent = inputValue;
}
