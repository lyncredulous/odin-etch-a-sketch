function main() {
  const grid = document.querySelector(".grid");
  const reset = document.querySelector(".btn");
  createGrid(grid, 16, 16);
  isHovered();
  reset.addEventListener("click", (e) => resetGrid(grid));
}

function createGrid(grid, rows, columns) {
  grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
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

function resetGrid(grid) {
  let rows = parseInt(
    prompt(
      "Please enter the new amount of squares you want per row and column (max 100)."
    )
  );

  if (isNaN(rows) || rows > 100) {
    return resetGrid(grid);
  }

  let columns = rows;

  while (grid.hasChildNodes()) {
    grid.removeChild(grid.lastChild);
  }

  createGrid(grid, rows, columns);
  isHovered();
}

main();
