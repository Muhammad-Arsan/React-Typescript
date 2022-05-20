import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
function App() {
  const personInfo = {
    first: "Muhammad",
    last: "Arsan",
  };
  const namesList = [
    {
      first: "babar",
      last: "Azam",
    },
    {
      first: "fakhar",
      last: "zaman",
    },
    {
      first: "Shaheen",
      last: "Afridi",
    },
  ];
  return (
    <div className="App">
      {/* <Greet name="Muhammad Arsan" messageCount={10} isLoggedIn={false} />
      <Person name={personInfo} />
      <PersonList names={namesList} /> */}

      <Status status="error" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>dsfdfds dsfds dsf</Heading>
      </Oscar>
    </div>
  );
}

export default App;
