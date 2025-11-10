import "./Note.css";
import trash from "../assets/trash.svg";

export function Note() {
  return (
    <>
      <div className="notes">
        <div className="firstcont">
          <button className="submit"></button>
          <p>NOTE #1</p>
        </div>
        <button className="delete">
          <img src={trash}></img>
        </button>
      </div>
      <hr></hr>
    </>
  );
}
