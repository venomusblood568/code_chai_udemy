import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCounter] = useState(0);

  const addValue = () => {
    setCounter(count + 1);
  };

  const removeValue = () => {
    setCounter(count - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  const [inputValue,setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addValueFromInput = () => {
    const addValueTo = Number(inputValue);
    if(!isNaN(addValueTo)) {
      setCounter(count + addValueTo);
    }
    setInputValue("");
  };

  return (
    <>
      <h1>Counter</h1>
      <h2>Count value : {count}</h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button onClick={removeValue}>remove value</button>{" "}
      <button onClick={reset}>Reset counter</button>
      <div style={{ marginTop: "10px" }}>
        <input
          type="text"
          placeholder="Enter a value to add"
          value= {inputValue}
          onChange={handleInputChange}
        ></input>{" "}
        <button onClick={addValueFromInput}>Add to Count</button>
      </div>
    </>
  );
}

export default App;
