// let arr =["Avatar","Spiderman"];
// const ul =document.querySelector(".movieList");
// for (let item of arr) {
//     const li = document.createElement("li");
//     li.innerText =`${item}`;
//     ul.appendChild(li);

// }

const ul = document.querySelector(".movieList");
console.log(ul);

const li = document.createElement("li");

li.innerText = "Dabangg";
li.classList.add = "movie";

ul.appendChild(li);
