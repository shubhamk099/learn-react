import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  function decrementValue() {
    // counter--+
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  function incrementValue() {
    // counter++;
    if (counter < 20) {
      setCounter(counter + 1);
    }
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter : {counter}</h2>

      <button type="button" onClick={incrementValue}>
        Increment Value
      </button>
      <br />
      <br />
      <button type="button" onClick={decrementValue}>
        Decrement Value
      </button>

      <p>Footer : {counter}</p>
    </>
  );
}

export default App;

// React controls ui - updation
// useState() is a hook, it propagate(react changes) to ui
