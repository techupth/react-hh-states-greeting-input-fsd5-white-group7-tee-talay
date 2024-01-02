import { useState } from "react";
import "./App.css";

function App() {
  const [greeting, setGreeting] = useState("Greeting Message");
  const [newGeeting, setNewGreeting] = useState("");

  const updateMessage = (event) => {
    event.preventDefault();
    setGreeting(newGeeting);
  };

  return (
    <div className="App">
      <div className="greeting-container">{greeting}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          value={newGeeting}
          onChange={(event) => setNewGreeting(event.target.value)}
        />
      </div>
      <div className="buttons">
        <button onClick={updateMessage}>Update text</button>
      </div>
    </div>
  );
}

export default App;
