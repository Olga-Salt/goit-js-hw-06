const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const elements = [];

ingredients.forEach((element) => {
  const item = document.createElement("li");
  item.textContent = element;
  item.classList.add("item");

  elements.push(item);
});

const listRef = document.querySelector("#ingredients");
listRef.append(...elements);
console.log(listRef);
