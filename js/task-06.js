const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onInputBlur);

// function onInputBlur(event) {
//   console.log(inputRef.placeholder);
//   if (inputRef.value.length < inputRef.dataset.length) {
//     inputRef.classList.add("invalid");
//   }

//   inputRef.classList.remove("invalid");
//   inputRef.classList.add("valid");

//   console.dir(event.currentTarget);
// }

function onInputBlur(event) {
  const eve = event.currentTarget;
  if (inputRef.value.length >= inputRef.dataset.length) {
    eve.classList.add("valid");
  }

  eve.classList.add("invalid");

  if (eve.classList.contains("valid")) {
    eve.classList.remove("invalid");
  } else if (eve.classList.contains("invalid")) {
    eve.classList.remove("valid");
  }

  console.dir(eve.classList);
}
