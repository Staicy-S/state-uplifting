// import { useState } from "react";

export function SessionCard(props) {
  // const [coach, setCoach] = useState("undecided!");
  // function handleChangeCoach(newCoach) {
  //   setCoach(newCoach);
  // }

  return (
    <section>
      <h2>Session: {props.title}</h2>
      <p>Coach: {props.coach}</p>
      <button
        onClick={() => {
          props.onChangeCoach(props.id, "Daisy");
        }}
      >
        Change to Daisy 🌼
      </button>
      <button
        onClick={() => {
          props.onChangeCoach(props.id, "Peach");
        }}
      >
        Change to Peach 🍑
      </button>
      <button
        onClick={() => {
          props.onChangeCoach(props.id, "Buuhuu");
        }}
      >
        Change to Buuhuu 👻
      </button>
    </section>
  );
}
