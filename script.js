let board = document.querySelector(".board");
let btnBlack = document.createElement("button");
let btnGray = document.createElement("button");
let btnRGB = document.createElement("button");
let btnSize = document.createElement("button");
let buttonsContainer = document.querySelector(".buttons");

function createDivs(col, rows) {
  for (let i = 0; i < col * rows; i++) {
    let div = document.createElement("div");
    div.style.border = "1px solid black";
    board.style.gridTemplateColumns = `repeat(${col},1fr)`;
    board.style.gridTemplateRows = `repeat(${rows},1fr)`;
    board.appendChild(div).classList.add("square");
  }
}

createDivs(16, 16);

function grayColor() {
  let squares = board.querySelectorAll(".square");
  btnGray.textContent = "Gray";
  btnGray.addEventListener("click", () => {
    squares.forEach((square) => {
      square.addEventListener("mouseover", () => {
        let randomNumber = Math.floor(Math.random() * 255);
        square.style.background = `rgb(${randomNumber}, ${randomNumber},${randomNumber})`;
      });
    });
  });
  buttonsContainer.appendChild(btnGray).classList.add("btn");
}

grayColor();

function blackColor() {
  let squares = board.querySelectorAll(".square");
  btnBlack.textContent = "Black";
  btnBlack.addEventListener("click", () => {
    squares.forEach((square) => {
      square.addEventListener("mouseover", () => {
        square.style.background = "black";
      });
    });
  });
  buttonsContainer.appendChild(btnBlack).classList.add("btn");
}

blackColor();

function rgbColor() {
  let squares = board.querySelectorAll(".square");
  btnRGB.textContent = "RGB";
  btnRGB.addEventListener("click", () => {
    squares.forEach((square) => {
      square.addEventListener("mouseover", () => {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        square.style.background = `rgb(${r},${g},${b})`;
      });
    });
  });
  buttonsContainer.appendChild(btnRGB).classList.add("btn");
}

rgbColor();
