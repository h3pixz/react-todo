import "./Body.css";
import plus from "../assets/plus.svg";
import trash from "../assets/trash.svg";

interface newProps {
  onClickPlus: () => void;
}

export function Body({ onClickPlus }: newProps) {
  return (
    <>
      <div className="notes">
        <div className="firstcont">
          <button className="submit"></button>
          <p>NOTE #1</p>
        </div>
        <button className="delete"><img src={trash}></img></button>
      </div>
      <hr></hr> 
      <div className="body">
        <button className="plusBtn" onClick={onClickPlus}>
          <img src={plus}></img>
        </button>
      </div>
    </>
  );
}
