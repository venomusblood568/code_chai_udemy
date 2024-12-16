function stringToNumber(input) {
  const number = Number(input);
  if (isNaN(number)) {
    return "Not a number";
  } else {
    return number;
  }
}

function flipBoolean(input) {
  return !Boolean(input);
}

function whatAmI(input) {
  if (typeof Number(input) === "number" && !isNaN(Number(input))) {
    return "I'm a number!";
  } else if (typeof String(input) === "string") {
    return "I'm a string!";
  }
  return "Unknown type";
}

function isItTruthy(input) {
  return input ? "It's truthy!" : "It's falsey!";
}
