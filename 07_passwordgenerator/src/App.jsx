import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copyColor, setCopyColor] = useState("blue");

  const passwordGenerator = useCallback(() => {
    let domain = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      domain += "0123456789";
    }

    if (characterAllowed) {
      domain += "!@#$%&*_+";
    }

    let pass = "";

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * domain.length + 1);
      pass += domain.charAt(index);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed]);

  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
    setCopyColor("green");
  }, [password]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-black text-white border border-gray-700">
      <h1 className="text-center my-3 text-xl font-bold">Password Generator</h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4 border border-gray-600">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-2 px-3 bg-black text-green-400 font-mono"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          className="outline-none text-white px-3 py-1 shrink-0"
          onClick={copyPasswordToClipboard}
          style={{ backgroundColor: copyColor }}
        >
          Copy
        </button>
      </div>

      <div className="flex flex-col gap-y-3 text-sm">
        <div className="flex items-center gap-x-2">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer accent-blue-500"
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            className="accent-blue-500"
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="numberInput">Include Numbers</label>
        </div>

        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            defaultChecked={characterAllowed}
            id="characterInput"
            className="accent-blue-500"
            onChange={() => setCharacterAllowed((prev) => !prev)}
          />
          <label htmlFor="characterInput">Include Special Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
