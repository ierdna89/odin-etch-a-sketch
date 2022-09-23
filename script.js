let slider = document.getElementById("myRange");
let output = document.getElementById("gridSize");
let isEraserButtonClicked = false;
let isGridButtonToggled = false;

output.innerText = `${slider.value} x ${slider.value}`;

slider.oninput = () => {
  output.innerText = `${slider.value} x ${slider.value}`;
}

slider.addEventListener("click", drawGrid);

function drawDefaultGrid() {
  for (let i = 0; i <= 256 - 1; i++) {
    const container = document.getElementById("gridContainer");
    const divs = document.createElement('div');
    divs.style.width = "31.25px";
    divs.style.height = "31.25px";
    container.style.width = "500px";
    divs.style.boxSizing = "border-box";
    divs.setAttribute("class", "gridDivs");
    // divs.style.border = "0.1px solid black";
    container.appendChild(divs);
  }

  document.getElementById("myRange").value = "16";
  console.log(isEraserButtonClicked);

  drawOnBoard();
  toggleGridButton();
}

drawDefaultGrid();

function drawGrid() {
  clearGrid();

  let gridSquaresXtraLarge = parseInt(output.innerText, 10);

  function calcTotalGrid(x) {
    return x = gridSquaresXtraLarge * gridSquaresXtraLarge;
  }

  function calcSquareDimensions(x) {
    x = 500 / gridSquaresXtraLarge;
    return x.toPrecision(4);;
  }

  function getGridDimension(x) {
    x = calcSquareDimensions() * gridSquaresXtraLarge + 0.5;
    return x.toFixed(2);
  }

  for (let i = 0; i <= calcTotalGrid() - 1; i++) {
    const container = document.getElementById("gridContainer");
    const divs = document.createElement('div');
    divs.style.width = `${calcSquareDimensions()}px`;
    divs.style.height = `${calcSquareDimensions()}px`;
    container.style.width = `${getGridDimension()}px`;
    divs.style.boxSizing = "border-box";
    divs.setAttribute("class", "gridDivs");
    // divs.style.border = "0.1px solid black";
    container.appendChild(divs);
  }
  drawOnBoard();
  toggleGridButton();
}


const button = document.getElementById("btn-Eraser");
button.addEventListener("click", () => {
  button.classList.toggle("btnClicked");
  if (isEraserButtonClicked === false) {
    isEraserButtonClicked = true;
    console.log(isEraserButtonClicked);
  }
  else {
    isEraserButtonClicked = false;
    console.log(isEraserButtonClicked);
  }
});


const clearGridButton = document.getElementById("btn-Reset");
clearGridButton.addEventListener("click", () => {
  clearGrid();
  drawGrid();
});

function clearGrid() {
  let gridDivs = document.getElementById('gridContainer');
  while (gridDivs.firstChild) {
    gridDivs.removeChild(gridDivs.firstChild);
  }
}

const gridButton = document.getElementById("btn-Grid");
gridButton.addEventListener("click", () => {
  gridButton.classList.toggle("btnClicked");
  if (isGridButtonToggled === false) {
    isGridButtonToggled = true;
    console.log(isGridButtonToggled);
    toggleGridButton();
  }
  else {
    isGridButtonToggled = false;
    console.log(isGridButtonToggled);
    toggleGridButton();
  }
});


function toggleGridButton() {

  const gridElements = document.getElementsByClassName("gridDivs");

  for (var i = 0; i < gridElements.length; ++i) {
    if (isGridButtonToggled === true) {
      gridElements[i].style.border = "0px solid black";
    }
    else {
      gridElements[i].style.border = "0.1px solid black";
    }
  }
}


//drawing on the board
function drawOnBoard() {
  let isDown = false;

  document.querySelector("gridContainer");
  for (const divs2 of gridContainer.children) {

    divs2.addEventListener("mousedown", () => {
      if (isEraserButtonClicked === false) {
        divs2.style.backgroundColor = "coral";
      }
      else {
        divs2.style.backgroundColor = "white";
      }
    });

    divs2.addEventListener("mouseover", () => {
      if (isDown === true && isEraserButtonClicked === false) {
        divs2.style.backgroundColor = "coral";
      }
      else if (isDown === true) {
        divs2.style.backgroundColor = "white"
      }
    });
  };

  document.addEventListener('mousedown', () => {
    isDown = true;
  });

  document.addEventListener('mouseup', () => {
    isDown = false;
  });

}