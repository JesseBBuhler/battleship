import "./ShipGrid.css";
import { useState } from "react";

const ShipGrid = () => {
  const [battleship, setBattleship] = useState("left-right");

  const changeDirection = () => {
    battleship === "left-right"
      ? setBattleship("top-bottom")
      : setBattleship("left-right");
  };
  return (
    <div className="grid oceanGrid">
      <div className="ship destroyer top-bottom"></div>
      <div className="ship cruiser top-bottom"></div>
      <div className="ship submarine top-bottom"></div>
      <div
        onClick={() => changeDirection()}
        className={`ship battleship ${battleship}`}
      ></div>
      <div className="ship carrier left-right"></div>
    </div>
  );
};

export default ShipGrid;
