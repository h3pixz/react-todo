import "./Body.css";
import plus from "../assets/plus.svg";

interface newProps {
  onClickPlus: () => void
}

export function Body({onClickPlus} : newProps) {
  return (
    <>
      <div className="body">
        <button 
        className="plusBtn"
        onClick={onClickPlus}
        >
          <img src={plus}></img>
        </button>
      </div>
    </>
  );
}
