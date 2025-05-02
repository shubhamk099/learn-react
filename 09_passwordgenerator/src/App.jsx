import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [isNumbers, setIsNumbers] = useState(false);
  const [isCharacters, setIsCharacters] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  // we need to cache a function and call it as our site load,
  // and when we increase length with slider, mark numbers and characters.
  // for this we can use useCallback(function, [dependencies]) hook
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNumbers) {
      str += "0123456789";
    }

    if (isCharacters) {
      str += "!@#$%^&*";
    }

    for (let index = 0; index < length; index++) {
      // pick random number from index [0, str.length - 1]
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [length, isNumbers, isCharacters, setPassword]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 40);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // if changes anything in the dependencies then run this method
  useEffect(() => {
    passwordGenerator();
  }, [length, isNumbers, isCharacters, passwordGenerator]);

  return (
    <>
      <h1 className="text-5xl text-center mt-10 text-white">
        Password Generator
      </h1>

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-3 py-3 my-8 text-orange-500 bg-gray-800">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copyToClipboard}
          >
            Copy
          </button>
        </div>
        {/* code for creating a slider  */}
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-0.8">
            <input
              type="range"
              min={6}
              max={40}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="passwordLength">Length : {length}</label>
          </div>
          {/* code for length checkbox */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={isNumbers}
              id="numberInput"
              onChange={() => {
                setIsNumbers((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
            {/* code for character checkbox */}
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={isCharacters}
              id="characterInput"
              onChange={() => {
                setIsCharacters((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
