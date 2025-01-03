import { useState } from "react";
import "./App.css";

function App() {
  const [defaultColor, setBgcolor] = useState("grey");

  const changeToRed = () => {
    setBgcolor("red");
  };

  const changeToBlue = () => {
    setBgcolor("blue");
  };

  const changeToGreen = () => {
    setBgcolor("green");
  };

  const changetoRandom = () => {
    const color = ["red","blue","cyan","Yellow","purple"];
    const randomColor = color[Math.floor(Math.random()*color.length)];
    setBgcolor(randomColor)
  };
  return (
    <>
      <div
        className="w-full h-screen text-orange-50 "
        style={{ backgroundColor: defaultColor }}
      >
        <h1>background changer</h1>
        <button
          onClick={changeToRed}
          className="px-4 py-2 bg-red-500 mr-4 rounded"
        >
          Red
        </button>{" "}
        <button
          onClick={changeToBlue}
          className="px-4 py-2 bg-blue-500 mr-4 rounded"
        >
          Blue
        </button>{" "}
        <button
          onClick={changeToGreen}
          className="px-4 py-2 bg-green-500 mr-4 rounded"
        >
          Green
        </button>{" "}
        <button
          onClick={changetoRandom}
          className="px-4 py-2 bg-slate-600 mr-4 rounded"
        >
          Random
        </button>
      </div>
    </>
  );
}

export default App;
