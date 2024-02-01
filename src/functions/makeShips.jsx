const makeShips = () => {
  let shipTypeStats = [
    { name: "carrier", health: 5 },
    { name: "battleship", health: 4 },
    { name: "submarine", health: 3 },
    { name: "destroyer", health: 3 },
    { name: "cruiser", health: 2 },
  ];

  const ships = Array(10);

  for (let i = 0; i < ships.length; i++) {
    let newShip = {
      owner: (i % 2) + 1,
      type: shipTypeStats[i % shipTypeStats.length].name,
      length: shipTypeStats[i % shipTypeStats.length].health,
      health: shipTypeStats[i % shipTypeStats.length].health,
      direction: "vertical",
      head: { row: 0, col: 0 },
      placed: false,
    };

    ships[i] = newShip;
  }

  return ships;
};

export default makeShips;
