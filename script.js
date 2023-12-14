const container = document.querySelector(".sketch-container");
let isDrawing = false;

function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.addEventListener("mousedown", () => {
      isDrawing = true;
      cell.classList.add("drawing");
    });
    cell.addEventListener("mouseover", draw);
    cell.addEventListener("mouseup", () => {
      isDrawing = false;
      cell.classList.remove("drawing");
    });
    container.appendChild(cell);
  }
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

function draw() {
  if (isDrawing) {
    this.style.backgroundColor = "#000";
  }
}

function clearGrid() {
  const cells = document.querySelectorAll(".sketch-container div");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "#fff";
  });
}

createGrid(16);
