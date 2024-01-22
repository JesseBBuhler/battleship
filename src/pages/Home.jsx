import Grid from "../components/grid/Grid.jsx";
import { useState } from "react";
import setUpGame from "../functions/setUpGame.jsx";
import "./Game.css";

const Home = () => {
  const [game, setGame] = useState(setUpGame());

  const onCellClick = () => {
    alert("click");
  };

  const swtichView = () => {
    game.view === "ocean"
      ? setGame((prevGame) => ({
          ...prevGame,
          view: "target",
        }))
      : setGame((prevGame) => ({
          ...prevGame,
          view: "ocean",
        }));
  };

  return (
    <div className="game">
      <div className="controlPanel">
        <div className="toggleGrid" onClick={() => swtichView()}>{`Switch to ${
          game.view === "ocean" ? "target" : "ocean"
        } grid`}</div>
      </div>
      <div className="gridContainer">
        <div
          className={`oceanGridContainer ${
            game.view === "ocean" ? "" : "invisible"
          }`}
        >
          {game.player === 1 ? (
            <Grid gridArr={game.player1Grid} onCellClick={onCellClick}></Grid>
          ) : (
            <Grid gridArr={game.player2Grid} onCellClick={onCellClick}></Grid>
          )}
        </div>
        <div
          className={`targetGridContainer ${
            game.view === "target" ? "" : "invisible"
          }`}
        >
          {game.player === 1 ? (
            <Grid gridArr={game.player2Grid} onCellClick={onCellClick}></Grid>
          ) : (
            <Grid gridArr={game.player1Grid} onCellClick={onCellClick}></Grid>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
