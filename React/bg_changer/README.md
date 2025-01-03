# Background color changer

1. Method 1 => this is what i did
```
const [defaultColor, setBgcolor] = useState("grey");

  const changeToRed = () => {
    setBgcolor("red");
  };
<h1>background changer</h1>
        <button
          onClick={changeToRed}
          className="px-4 py-2 bg-red-500 mr-4 rounded"
        >
          Red
        </button>{" "}
```

2. Method 2  => better way same things
 
```
const [defaultColor, setBgcolor] = useState("grey");
  <button
          onClick={() => setBgcolor("red")}
          className="px-4 py-2 bg-red-500 mr-4 rounded"
        >
          Red
        </button>{" "}
```