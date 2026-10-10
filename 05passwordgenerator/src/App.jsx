
import { useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  function generatePassword() {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numbers) chars += "0123456789";
    if (symbols) chars += "!@#$%^&*";

    let result = "";

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * chars.length);
      result += chars[index];
    }

    setPassword(result);
  }

  function copyPassword() {
    navigator.clipboard.writeText(password);
  }

  return (
    <div className="container">
      <h2>Password Generator</h2>

      <div className="password">
        <input value={password} placeholder="Password" readOnly />
        <button onClick={copyPassword}>Copy</button>
      </div>

      <p>Length: {length}</p>

      <input
        type="range"
        min="4"
        max="16"
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
      />

      <p>
        <label>
          <input
            type="checkbox"
            checked={numbers}
            onChange={() => setNumbers(!numbers)}
          />
          Numbers
        </label>
      </p>

      <p>
        <label>
          <input
            type="checkbox"
            checked={symbols}
            onChange={() => setSymbols(!symbols)}
          />
          Symbols
        </label>
      </p>

      <button onClick={generatePassword}>Generate Password</button>
    </div>
  );
}

export default App;

