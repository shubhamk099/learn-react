import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h2 className="bg-blue-600 p-5 rounded-2xl text-2xl my-4">
        Hello World!
      </h2>
      <Card cardTitle="Shubham" btnText="LinkedIn" />
      <Card cardTitle="Rajeev" btnText="Twitter" />
    </>
  );
}

export default App;
