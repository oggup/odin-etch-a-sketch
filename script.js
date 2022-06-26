let board = document.querySelector(".board");
let btnBlack = document.createElement("button");
let btnGray = document.createElement("button");
let btnRGB = document.createElement("button");
let btnSize = document.createElement("button");
let btnEmpty = document.createElement("button");
let buttonsContainer = document.querySelector(".buttons");
let slider= document.querySelector(".slider");
function createDivs(col, rows) {
  for (let i = 0; i < col * rows; i++) {
    let div = document.createElement("div");
    div.style.border = "1px solid black";
    board.style.gridTemplateColumns = `repeat(${col},1fr)`;
    board.style.gridTemplateRows = `repeat(${rows},1fr)`;
    board.appendChild(div).classList.add("square");
  }
}

// slider.addEventListener("change", (e)=>{
//   board.innerHTML=""
//   createDivs(e.target.value, e.target.value)
//   let gridSize = document.querySelector(".size-value")
  
//   gridSize.textContent =`${e.target.value} x ${e.target.value}`
// })

createDivs(16, 16);

function grayColor() {
  let squares = board.querySelectorAll(".square");
  btnGray.textContent = "Gray";
  btnGray.addEventListener("click", (e) => {
    console.log(e)
    squares.forEach((square) => {
      square.addEventListener("mouseover", (e) => {
        console.log(e)
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

function emptyColor() {
  let squares = board.querySelectorAll(".square");
  btnEmpty.textContent = "Empty Grid";
  btnEmpty.addEventListener(
    "click",()=>{
      squares.forEach(square=>{
        square.style.background = ""
      })
    }
  );
  buttonsContainer.appendChild(btnEmpty);
}
emptyColor()

// function reSize() {
//   btnSize.textContent = "GRID SIZE";
//   btnSize.addEventListener("click", () => {
//     let user = prompt("what size do you want your grid to be?");
//   });
// }
