import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Form } from "./components/Form";

function App() {
  // use state for the number
  const [value, setValue] = useState(0);

  // use state for leo's fat cock
  const [leoCock, setLeoCock] = useState("");

  // function to increment
  const increment = () => {
    setValue(value + 1);
  };

  // function to decrement
  const decrement = () => {
    setValue(value - 1);
  };

  // set leo's fat cock
  const leoFatCock = () => {
    setLeoCock();
  };

  return (
    <div className="App">
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <p>{value}</p>
      <br />
      <input
        onChange={(event) => {
          setLeoCock(event.target.value);
        }}
      />
      <h1>{leoCock}</h1>
      <Form />
    </div>
  );
}

export default App;
