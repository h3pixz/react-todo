import "./Body.css";
import plus from "../assets/plus.svg";

export function Body() {
  return (
    <>
      <div className="body">
        <button className="plusBtn">
          <img src={plus}></img>
        </button>
      </div>
    </>
  );
}
