import Grid from "../components/grid/Grid.jsx";
import { useState } from "react";
import "./Game.css";
import setUpGrid from "../functions/setUpGrid.jsx";
import addShip from "../functions/addShip.jsx";

const Home = () => {
  const [player1Grid, setplayer1Grid] = useState(setUpGrid());
  const [player2Grid, setplayer2Grid] = useState(setUpGrid());
  const [player, setPlayer] = useState(0);
  const [view, setView] = useState("ocean");
  const [playerReady, setPlayerReady] = useState(false);
  const [shotFired, setShotFired] = useState(false);

  const togglePlayer = () => {
    player === 1 ? setPlayer(2) : setPlayer(1);
  };

  const onCellClick = (cellLoc) => {
    if (shotFired) return 0;

    let row = cellLoc.row;
    let col = cellLoc.col;

    let gridToHit = [];
    if (player === 1) {
      gridToHit = player2Grid.map((row) => {
        return row.slice();
      });
    } else {
      gridToHit = player1Grid.map((row) => {
        return row.slice();
      });
    }

    if (gridToHit[row][col].data === "ship") {
      gridToHit[row][col].data = "hit";
    } else {
      gridToHit[row][col].data = "miss";
    }

    if (player === 1) {
      setplayer2Grid(gridToHit);
    } else {
      setplayer1Grid(gridToHit);
    }

    setShotFired(true);
  };

  const swtichView = () => {
    view === "ocean" ? setView("target") : setView("ocean");
  };

  const makePlayerReady = () => {
    setPlayerReady(true);
    player ? togglePlayer() : setPlayer(1);
    setShotFired(false);
    setView("ocean");
  };

  const endTurn = () => {
    setPlayerReady(false);
  };

  const startGame = () => {
    const ship1 = {
      name: "battleship",
      length: 4,
      health: 4,
      head: { row: 0, col: 0 },
      direction: "horizontal",
    };

    const ship2 = {
      name: "submarine",
      length: 3,
      health: 3,
      head: { row: 2, col: 3 },
      direction: "vertical",
    };

    const ship3 = {
      name: "battleship",
      length: 4,
      health: 4,
      head: { row: 7, col: 6 },
      direction: "horizontal",
    };

    const ship4 = {
      name: "submarine",
      length: 3,
      health: 3,
      head: { row: 3, col: 3 },
      direction: "vertical",
    };

    alert(addShip(ship1, player1Grid, setplayer1Grid));
    alert(addShip(ship2, player1Grid, setplayer1Grid));
    alert(addShip(ship3, player2Grid, setplayer2Grid));
    alert(addShip(ship4, player2Grid, setplayer2Grid));
    makePlayerReady();
  };

  return (
    <>
      <div className={`getReady ${playerReady ? "invisible" : ""}`}>
        {player ? (
          <div>
            <h1>Player {player} has taken their turn.</h1>{" "}
            <h4 className="nextTurnButton" onClick={() => makePlayerReady()}>
              Start Player {(player % 2) + 1}'s Turn.
            </h4>
          </div>
        ) : (
          <h4 className="nextTurnButton" onClick={() => startGame()}>
            Start Game
          </h4>
        )}
      </div>

      <div className={`dashboard ${playerReady ? "" : "invisible"}`}>
        <div className="controlPanel">
          <div className="playerDisplay">{`Player: ${player}`}</div>
          <div
            className="toggleGrid"
            onClick={() => swtichView()}
          >{`Switch to ${view === "ocean" ? "target" : "ocean"} grid`}</div>
          <div
            className={`endTurnButton ${shotFired ? "" : "invisible"}`}
            onClick={() => endTurn()}
          >
            End Turn
          </div>
        </div>

        <div className={`gridContainer`}>
          <div
            className={`oceanGridContainer ${
              view === "ocean" ? "" : "invisible"
            }`}
          >
            {player === 1 ? (
              <Grid gridArr={player1Grid} onCellClick={() => {}}></Grid>
            ) : (
              <Grid gridArr={player2Grid} onCellClick={() => {}}></Grid>
            )}
          </div>
          <div
            className={`targetGridContainer ${
              view === "target" ? "" : "invisible"
            }`}
          >
            {player === 1 ? (
              <Grid gridArr={player2Grid} onCellClick={onCellClick}></Grid>
            ) : (
              <Grid gridArr={player1Grid} onCellClick={onCellClick}></Grid>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
