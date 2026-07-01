let arr = [
  "Sumit",
  "Spiderman",
  "Sourabh",
  "Ram",
  "Superman",
  "House of Dragon",
  "Game of Thrones",
];

const ul = document.querySelector(".movieList");

for (let item of arr) {
  ul.innerHTML += `<li>${item}</li>`;
}