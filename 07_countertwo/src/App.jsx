import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10);

  function incrementValue() {
    if (counter < 20) {
      // The value will still increment by 1 only, because
      // react batches state updates, only the last update takes place
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);

      // to force the change, we can use a call-back inside state
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
    }
  }

  function decrementValue() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <div id="counter">
        <h2>Welcome To The Counter App</h2>

        <h3>Value of counter is : {counter}</h3>

        <button type="button" onClick={incrementValue}>
          Increment
        </button>
        <br />
        <br />
        <button type="button" onClick={decrementValue}>
          Decrement
        </button>

        <p>footer: {counter}</p>
      </div>
    </>
  );
}

export default App;
