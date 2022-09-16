for (let i = 0; i <= 224; i++) {
  const container = document.getElementById("container");
  const divs = document.createElement('div');
  divs.style.width = "40px";
  divs.style.height = "40px";
  divs.style.boxSizing = "border-box";
  divs.style.border = "0.1px solid black";
  divs.addEventListener("mousedown", () => {
    divs.style.backgroundColor = "pink";
  });
  container.appendChild(divs);
}


let isDown = false;

const divs2 = document.querySelector("container");
for (const divs2 of container.children) {
  divs2.addEventListener("mouseover", () => {
    if (isDown === true) {
      divs2.style.backgroundColor = "pink";
    }
  });
};

document.addEventListener('mousedown', () => {
  isDown = true;
});

document.addEventListener('mouseup', () => {
  isDown = false;
});


// const divs2 = document.querySelector("container");
// for (const divs2 of container.children) {
//   divs2.addEventListener("click", () => {
//     divs2.style.backgroundColor = "pink";
//   });
//   divs2.addEventListener("mouseover", () => {
//     divs2.style.backgroundColor = "pink";
//   });

// };



// const divs3 = document.querySelector("container");
// for (const divs3 of container.children) {
//   divs3.addEventListener("click", () => {
//     divs3.style.backgroundColor = "gray";
//   });
// };