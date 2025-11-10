import "./Body.css";
import plus from "../assets/plus.svg";
import { Note } from "../Note/Note";

interface newProps {
  onClickPlus: () => void;
}

export function Body({ onClickPlus }: newProps) {
  return (
    <>
      <Note />
      <Note />
      <Note />
      <div className="body">
        <button className="plusBtn" onClick={onClickPlus}>
          <img src={plus}></img>
        </button>
      </div>
    </>
  );
}
