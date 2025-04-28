import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    name: "Shubham Kumar",
    age: 24,
  };

  return (
    <>
      <h1 className="text-black p-4 bg-green-600 rounded-xl">Tailwind CSS</h1>
      {/* We can pass arguments, or single varibale(object) to the Card like function */}
      <Card username="chaiaurcode" btnText="Go To Google" />
      <Card username="hiteshchaudary" btnText="Go To Facebook" />
    </>
  );
}

export default App;
