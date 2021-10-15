const refs = {
  input: document.querySelector("#font-size-control"),
  inputSpan: document.querySelector("#text"),
};

refs.input.addEventListener("input", onInputInput);

function onInputInput() {
  let fontSize = (refs.inputSpan.style.fontSize = refs.input.value + "px");

  //   console.log(fontSize);
}
