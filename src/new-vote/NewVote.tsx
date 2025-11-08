import "./NewVote.css";

export function NewVote() {
  return (
    <>
      <div className="container">
        <div className="inputVote">
          <h1>NEW VOTE</h1>
          <input placeholder="Input your vote..." className="textVote"></input>
        </div>
        <div className="twoButtons">
            <button className="cansel">CANCEL</button>
            <button className="apply">APPLY</button>
        </div>
      </div>
    </>
  );
}
