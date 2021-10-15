const listItemRef = document.querySelectorAll("#categories > li");
console.log(`Number of categories: ${listItemRef.length}`);
// ======== 1.2 ==============
const listTitleRef = document.querySelectorAll(".item");
listTitleRef.forEach((title) => {
  console.log(`Category: ${title.firstElementChild.textContent}
Elements: ${title.lastElementChild.childElementCount}`);
});
