function filterNumbers(arr) {
  return arr.filter((item) => typeof item === "number");
}

function reverseArray(arr) {
  return arr.reverse();
}

function findMax(arr) {
  return Math.max(...arr);
}

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

function flattenArray(arr) {
  return arr.flat(Infinity);
}

// new Set() removes duplicates because a Set only keeps unique values; [...Set] spreads the Set back into an array, keeping just the unique elements.
// flat(Infinity) flattens the array no matter how deeply nested it is, making everything into a single-level array.
// Math.max() finds the largest number from the arguments you pass to it; ...arr spreads the array into individual numbers so Math.max() can compare them.
// filter() creates a new array with only the items that match the condition; typeof item === 'number' checks if the item is a number and excludes anything else.
// reverse() reverses the order of elements in the array, changing the original array and returning the reversed version.
