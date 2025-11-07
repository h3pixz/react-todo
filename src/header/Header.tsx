import "./Header.css";
import sun from '../assets/sun.svg';


export function Header() {
  return (
    <>
      <div className="header">
        <h1>TODO LIST</h1>
        <div className="bar">
          <input placeholder="Search note..." className="search"></input>
          <button className="all">ALL</button>
          <button className="sunImg">
            <img src={sun}></img>
          </button>
        </div>
      </div>
    </>
  );
}
