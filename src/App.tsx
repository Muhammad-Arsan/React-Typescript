import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TextField from "./TextField";

function App() {
  const addNumber = (a: number) => {
    return a * a;
  };
  const handleChange = (e: any) => {
    console.log("fdsfd");
  };
  return (
    <div className="App">
      <TextField
        text="Hi there"
        isLoggedIn={false}
        amount={33}
        fn={() => addNumber(3)}
        person={{ name: "arsan", age: 32 }}
        handleChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default App;
