import Grid from "../components/grid/Grid.jsx";
import ShipGrid from "../components/grid/ShipGrid.jsx";
import { useState } from "react";
import setUpGrid from "../functions/setUpGrid.jsx";
import "./Game.css";

const Home = () => {
  const backgroundGrid = setUpGrid("background");
  const [targetGrid, setTargetGrid] = useState(setUpGrid("target"));
  const [shipPositions, setShipPositions] = useState();
  const [view, setView] = useState("ocean");

  const swtichView = () => {
    view === "ocean" ? setView("target") : setView("ocean");
  };

  return (
    <div className="game">
      <div className="controlPanel">
        <div className="toggleGrid" onClick={() => swtichView()}>{`Switch to ${
          view === "ocean" ? "target" : "ocean"
        } grid`}</div>
      </div>
      <div className="gridContainer">
        <div
          className={`oceanGridContainer ${
            view === "ocean" ? "" : "invisible"
          }`}
        >
          <Grid gridArr={backgroundGrid}></Grid>
          <ShipGrid
            shipPositions={shipPositions}
            setShipPositions={setShipPositions}
          ></ShipGrid>
        </div>
        <div className={`targetGrid ${view === "target" ? "" : "invisible"}`}>
          <Grid gridArr={targetGrid} setGrid={setTargetGrid}></Grid>
        </div>
      </div>
    </div>
  );
};

export default Home;
