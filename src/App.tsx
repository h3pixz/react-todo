import "./App.css";
import { Header } from "./header/Header";
import { Body } from "./body/Body";
import { NewVote } from "./new-vote/NewVote";


export function App() {
  return (
    <>
      <Header />
      <Body />
      <NewVote />
    </>
  );
}
