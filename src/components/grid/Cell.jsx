import "./Cell.css";

const Cell = (props) => {
  let cell = props.cell;
  return (
    <div
      className={`cell ${cell.type}`}
      onClick={() => {
        props.onCellClick(cell.loc);
      }}
    >
      {cell.type !== "index" ? (
        <div className={`circle ${cell.type}`}></div>
      ) : (
        cell.data
      )}
    </div>
  );
};

export default Cell;
