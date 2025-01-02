import { useState } from 'react'
import './App.css'

function App() {

  const[count, setCounter] = useState(0)

  const addValue = () => {
    setCounter(count + 1)
  }

  const removeValue = () => {
    setCounter(count - 1)
  }

  const reset = () => {
    setCounter(0)
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>Count value : {count}</h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button onClick={removeValue}>remove value</button>{" "}
      <button onClick={reset}>Reset counter</button>
    </>
  );
}

export default App
