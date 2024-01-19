import Grid from "../components/grid/Grid.jsx";
import { useState } from "react";
import setUpGrid from "../functions/setUpGrid.jsx";
import "./Home.css";

const Home = () => {
  const [targetGrid, setTargetGrid] = useState(setUpGrid("target"));
  const [oceanGrid, setOceanGrid] = useState(setUpGrid("ocean"));
  const [view, setView] = useState("ocean");
  const swtichView = () => {
    view === "ocean" ? setView("target") : setView("ocean");
  };
  return (
    <div className="game">
      <div className="toggleGrid" onClick={() => swtichView()}>{`Switch to ${
        view === "ocean" ? "target" : "ocean"
      } grid`}</div>
      <div className={`targetGrid ${view === "target" ? "" : "invisible"}`}>
        <Grid gridArr={targetGrid} setGrid={setTargetGrid}></Grid>
      </div>
      <div className={`oceanGrid ${view === "ocean" ? "" : "invisible"}`}>
        <Grid gridArr={oceanGrid} setGrid={setOceanGrid}></Grid>
      </div>
    </div>
  );
};

export default Home;
