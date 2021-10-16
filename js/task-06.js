const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const eve = event.currentTarget;
  if (inputRef.value.length === 6) {
    eve.classList.add("valid");
    eve.classList.replace("invalid", "valid");
  } else {
    eve.classList.add("invalid");
    eve.classList.replace("valid", "invalid");
  }

  console.dir(eve.classList);
}
