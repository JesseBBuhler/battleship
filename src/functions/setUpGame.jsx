import setUpGrid from "./setUpGrid.jsx";

const setUpGame = () => {
  const game = {
    player: 1,
    view: "ocean",
    player1Grid: setUpGrid(),
    player2Grid: setUpGrid(),
  };

  return game;
};

export default setUpGame;
