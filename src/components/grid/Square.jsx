import "./Square.css";

const Square = (props) => {
  let cell = props.cell;
  return (
    <div className="square">
      {cell.type !== "index" ? cell.type : cell.data}
    </div>
  );
};

export default Square;
