function main() {
  const grid = document.querySelector(".grid");
  createGrid(grid, 16, 16);
  isHovered();
}

function createGrid(grid, rows, columns) {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const gridSquare = document.createElement("div");
      gridSquare.classList.add("square");
      grid.append(gridSquare);
    }
  }
}

function isHovered() {
  const gridSquares = Array.from(document.querySelectorAll(".square"));
  gridSquares.forEach((square) =>
    square.addEventListener("mouseover", (e) => square.classList.add("hovered"))
  );
}

main();