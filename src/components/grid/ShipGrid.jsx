import "./ShipGrid.css";

const ShipGrid = () => {
  return (
    <div className="grid oceanGrid">
      <div className="gridSpacer">0</div>
      <div className="ship one top-bottom"></div>
      <div className="ship two top-bottom"></div>
      <div className="ship three top-bottom"></div>
      <div className="ship four left-right"></div>
      <div className="ship five left-right"></div>
    </div>
  );
};

export default ShipGrid;
