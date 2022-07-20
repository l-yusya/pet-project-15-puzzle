(function () {
  let emptyX = 0;
  let emptyY = 0;

  function moveToEmptyPlace(cell) {
    const x = emptyX;
    const y = emptyY;

    emptyX = cell.x;
    emptyY = cell.y;

    cell.x = x;
    cell.y = y;

    cell.style.left = `${x * 25}%`;
    cell.style.top = `${y * 25}%`;
  }

  const cells = [...document.querySelectorAll(".cell")];
  cells.sort(() => Math.random() - 0.5);

  let x = 0;
  let y = 0;

  for (let cell of cells) {
    x += 1;

    if (x === 4) {
      x = 0;
      y += 1;
    }

    cell.x = x;
    cell.y = y;

    moveToEmptyPlace(cell);

    cell.addEventListener("click", function () {
      let dX = cell.x - emptyX;
      let dY = cell.y - emptyY;

      let distance = Math.abs(dX) + Math.abs(dY);

      if (distance === 1) {
        moveToEmptyPlace(cell);
      }
    });
  }
})();
