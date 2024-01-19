import Cell from "./Cell";
import "./Grid.css";

const Grid = (props) => {
  const makeGridLine = () => {
    const arr = [];
    for (let i = 0; i <= 10; i++) {
      let cell = { type: "index", data: i };
      arr.push(cell);
    }
    for (let i = 0; i < props.gridArr.length; i++) {
      let cell = { type: "index", data: String.fromCharCode(65 + i) };
      arr.push(cell);
      for (let j = 0; j < props.gridArr[i].length; j++) {
        arr.push(props.gridArr[i][j]);
      }
    }
    return arr;
  };
  const gridLine = makeGridLine();
  return (
    <div className="grid">
      {gridLine.map((cell, index) => {
        return <Cell key={index} cell={cell}></Cell>;
      })}
    </div>
  );
};

export default Grid;
