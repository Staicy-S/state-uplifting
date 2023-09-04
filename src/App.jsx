import { useState } from "react";
import "./App.css";
import { SessionCard } from "./SessionCard.jsx";

const initialSessions = [
  {
    id: 1,
    title: "Mario Party 🎉",
    coach: "undefined",
  },
  {
    id: 2,
    title: "Mario Golf ⛳",
    coach: "undefined",
  },
  {
    id: 3,
    title: "Mario Strikers ⚽",
    coach: "undefined",
  },
];

function App() {
  const [sessions, setSessions] = useState(initialSessions);

  function handleChangeCoach(id, newCoach) {
    console.log("handleChangeData has been called", id, newCoach);
    setSessions(
      sessions.map((session) => {
        if (id === session.id) {
          return {
            id: session.id,
            title: session.title,
            coach: newCoach,
          };
        } else {
          return session;
        }
      })
    );
  }

  const daisysSessionsOnly = sessions.filter(
    (session) => session.coach === "Daisy"
  );
  const sessionCountDaisy = daisysSessionsOnly.length;
  const peachsSessionsOnly = sessions.filter(
    (session) => session.coach === "Peach"
  );
  const sessionCountPeach = peachsSessionsOnly.length;
  const buuhuusSessionsOnly = sessions.filter(
    (session) => session.coach === "Buuhuu"
  );
  const sessionCountBuuhuu = buuhuusSessionsOnly.length;

  return (
    <>
      <p>Sessions with 🌼: {sessionCountDaisy}</p>
      <p>Sessions with 🍑: {sessionCountPeach}</p>
      <p>Sessions with 👻: {sessionCountBuuhuu}</p>

      {sessions.map((session) => {
        return (
          <SessionCard
            key={session.id}
            title={session.title}
            coach={session.coach}
            id={session.id}
            onChangeCoach={handleChangeCoach}
          />
        );
      })}
    </>
  );
}

export default App;
