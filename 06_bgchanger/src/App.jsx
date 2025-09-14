import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {/* Red Button */}
          <button
            className="outline-none px-4 py-1 text-white shadow-lg rounded-full "
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          {/* Green Button */}
          <button
            className="outline-none px-4 py-1 text-white shadow-lg rounded-full "
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
          {/* Blue Button */}
          <button
            className="outline-none px-4 py-1 text-white shadow-lg rounded-full "
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          {/* Yellow Button*/}
          <button
            className="outline-none px-4 py-1 text-white shadow-lg rounded-full "
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          {/* Orange  Button*/}
          <button
            className="outline-none px-4 py-1 text-white shadow-lg rounded-full "
            style={{ backgroundColor: "orange" }}
            onClick={() => setColor("orange")}
          >
            Orange
          </button>
          {/* Violet Button*/}
          <button
            className="outline-none px-4 py-1 text-white shadow-lg rounded-full "
            style={{ backgroundColor: "violet" }}
            onClick={() => setColor("violet")}
          >
            Violet
          </button>
          {/* Purple Button*/}
          <button
            className="outline-none px-4 py-1 text-white shadow-lg rounded-full "
            style={{ backgroundColor: "purple" }}
            onClick={() => setColor("purple")}
          >
            Purple
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
