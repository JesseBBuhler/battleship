import Grid from "../components/grid/Grid.jsx";
import { useState } from "react";
import "./Game.css";
import setUpGrid from "../functions/setUpGrid.jsx";
import addShip from "../functions/addShip.jsx";
import makeShips from "../functions/makeShips.jsx";
import DockYard from "../components/DockYard.jsx";

const Home = () => {
  const [player1Grid, setplayer1Grid] = useState(setUpGrid());
  const [player2Grid, setplayer2Grid] = useState(setUpGrid());
  const [player, setPlayer] = useState(0);
  const [view, setView] = useState("ocean");
  const [playerReady, setPlayerReady] = useState(false);
  const [shotFired, setShotFired] = useState(false);
  const [shipsPlaced, setShipsPlaced] = useState(false);
  const [ships, setShips] = useState(makeShips());
  const [selectedShip, setSelectedShip] = useState(-1);

  const togglePlayer = () => {
    player === 1 ? setPlayer(2) : setPlayer(1);
  };

  const toggleShipsPlaced = () => {
    alert("toggle");
    shipsPlaced ? setShipsPlaced(false) : setShipsPlaced(true);
  };

  const fireShot = (cellLoc) => {
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

  const switchView = () => {
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

  const toggleShipDirection = (shipIndex) => {
    let tempShips = ships.slice();
    tempShips[shipIndex].direction === "vertical"
      ? (tempShips[shipIndex].direction = "horizontal")
      : (tempShips[shipIndex].direction = "vertical");

    setShips(tempShips);
  };

  const selectShip = (shipIndex) => {
    setSelectedShip(shipIndex);
  };

  const removeShip = (shipIndex) => {};

  const callAddShip = (loc) => {
    let tempShips = ships.slice();

    tempShips[selectedShip].head.row = loc.row;
    tempShips[selectedShip].head.col = loc.col;
    setShips(tempShips);

    let sendAlert = false;
    player === 1
      ? (sendAlert = addShip(ships[selectedShip], player1Grid, setplayer1Grid))
      : (sendAlert = addShip(ships[selectedShip], player2Grid, setplayer2Grid));

    if (sendAlert) {
      alert("Not a valid ship placement");
    }
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
          <h4 className="nextTurnButton" onClick={() => makePlayerReady()}>
            Start Game
          </h4>
        )}
      </div>

      <div className={`dashboard ${playerReady ? "" : "invisible"}`}>
        <div className="controlPanel">
          <div className="playerDisplay">{`Player: ${player}`}</div>
          <div
            className={`dockYardContainer ${!shipsPlaced ? "" : "invisible"}`}
            onClick={() => toggleShipsPlaced()}
          >
            <DockYard
              ships={ships}
              toggleShipDirection={toggleShipDirection}
              selectShip={selectShip}
              removeShip={removeShip}
            ></DockYard>
          </div>
          <div
            className={`gameButtonsContainer ${shipsPlaced ? "" : "invisible"}`}
          >
            <div
              className="toggleGrid"
              onClick={() => switchView()}
            >{`Switch to ${view === "ocean" ? "target" : "ocean"} grid`}</div>
            <div
              className={`endTurnButton ${shotFired ? "" : "invisible"}`}
              onClick={() => endTurn()}
            >
              End Turn
            </div>
          </div>
        </div>

        <div className={`gridContainer`}>
          <div
            className={`placeGridContainer ${!shipsPlaced ? "" : "invisible"}`}
          >
            {player === 1 ? (
              <Grid
                gridArr={player1Grid}
                gridType={"placeShips"}
                onCellClick={callAddShip}
              ></Grid>
            ) : (
              <Grid
                gridArr={player2Grid}
                gridType={"placeShips"}
                onCellClick={callAddShip}
              ></Grid>
            )}
          </div>
          <div
            className={`gameGridsContainer${shipsPlaced ? "" : "invisible"}`}
          >
            <div
              className={`oceanGridContainer ${
                view === "ocean" ? "" : "invisible"
              }`}
            >
              {player === 1 ? (
                <Grid
                  gridArr={player1Grid}
                  gridType={"ocean"}
                  onCellClick={() => {}}
                ></Grid>
              ) : (
                <Grid
                  gridArr={player2Grid}
                  gridType={"ocean"}
                  onCellClick={() => {}}
                ></Grid>
              )}
            </div>
            <div
              className={`targetGridContainer ${
                view === "target" ? "" : "invisible"
              }`}
            >
              {player === 1 ? (
                <Grid
                  gridArr={player2Grid}
                  gridType={"target"}
                  onCellClick={fireShot}
                ></Grid>
              ) : (
                <Grid
                  gridArr={player1Grid}
                  gridType={"target"}
                  onCellClick={fireShot}
                ></Grid>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
