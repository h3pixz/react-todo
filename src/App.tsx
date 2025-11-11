import "./App.css";
import { Header } from "./header/Header";
import { Body } from "./body/Body";
import { NewVote } from "./new-vote/NewVote";
import { Note } from "./Note/Note";
import { useState } from "react";

export function App() {
  const [voteOpened, setVoteOpened] = useState(false);

  return (
    <>
      <Header />
      <Note />
      <Body onClickPlus={() => setVoteOpened(true)}/>
      {voteOpened ? <NewVote onClose={() => setVoteOpened(false)}/> : null}
    </>
  );
}
