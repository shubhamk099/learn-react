import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  function incrementValue() {
    if (counter < 10) {
      /**
       * Using multiple times setCounter(counter + 1), will result the same effect, as
       * react, state updates are asynchronous and batched, if we really want to do like this, then
       * use the functional update form of setCounter, which gives the latest counter value
       * : setCounter(prevCounter => prevCounter + 1);
       */
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
      console.log("Current value of counter : ", counter);
    }
  }

  function decrementValue() {
    if (counter > 0) {
      setCounter(counter - 1);
      console.log("Current value of counter : ", counter);
    }
  }

  return (
    <>
      <h2>Counter App</h2>
      <p>Value of Counter : {counter}</p>

      <button onClick={incrementValue}>Increment - {counter}</button>
      <br />
      <button onClick={decrementValue}>Decrement - {counter}</button>
    </>
  );
}

export default App;

/**
 * The useState hook is used to manage state in React.
 * State is simply data that can change over time.
 * The useState hook lets us create a state variable, initialize it
 * with data and also gives us access to a setter function that lets us update this state.
 *
 * This is especially important in React which, just like the name suggests,
 * is a library that is designed to efficiently update and react to
 * changes in the user interface. The library efficiently updates the
 * DOM when the application state changes, providing a reactive programming model.
 *
 * const [state, setState] = useState(initialValue)
 *
 * -> state is the state variable.
 * -> setState is the setter function that lets us update the state variable,
 *    triggering React to re-render the component.
 * -> initialValue is the value we use to initialize the state variable.
 */

/**
 * Virtual DOM, Fiber, Reconciliation
 * https://github.com/acdlite/react-fiber-architecture
 */
