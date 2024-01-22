const setUpGrid = () => {
  const gridArr = [];

  for (let i = 0; i < 10; i++) {
    const row = [];
    for (let j = 0; j < 10; j++) {
      let cell = { type: "board", loc: { row: i, col: j }, data: "Cell!" };
      row.push(cell);
    }
    gridArr.push(row);
  }

  return gridArr;
};

export default setUpGrid;
