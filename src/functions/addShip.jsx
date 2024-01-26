const addShip = (ship, grid, setGrid) => {
  const tempGrid = grid.map((row) => {
    return row.slice();
  });

  if (ship.direction === "vertical") {
    if (ship.head.row + ship.length > tempGrid.length) {
      return false;
    }
    for (let i = 0; i < ship.length; i++) {
      if (tempGrid[ship.head.row + i][ship.head.col].data === "ship") {
        return false;
      }
    }
    for (let i = 0; i < ship.length; i++) {
      tempGrid[ship.head.row + i][ship.head.col].data = "ship";
    }
  } else {
    if (ship.head.col + ship.length > tempGrid[0].length) {
      return false;
    }
    for (let i = 0; i < ship.length; i++) {
      if (tempGrid[ship.head.row][ship.head.col + i].data === "ship") {
        return false;
      }
    }
    for (let i = 0; i < ship.length; i++) {
      tempGrid[ship.head.row][ship.head.col + i].data = "ship";
    }
  }

  setGrid(tempGrid);

  return true;
};

export default addShip;
