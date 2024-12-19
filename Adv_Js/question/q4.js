// Task 1
const person = {
  // Define an object `person` with a property `name` and a method `introduce`
  name: "Alice",
  introduce() {
    // Method `introduce` returns a string introducing the person using `this.name`
    return `Hi, my name is ${this.name}`;
  },
};

// Bind the `introduce` method of `person` to always use the `person` object as its `this`
const boundIntroduce = person.introduce.bind(person);

// Task 2
function introduce() {
  // A standalone function `introduce` that uses `this.name` to construct a greeting
  return `Hi, my name is ${this.name}`;
}

// Define an object `person1` with a `name` property
const person1 = { name: "Alice" };

// Define another object `person2` with a `name` property
const person2 = { name: "Bob" };

// Call the `introduce` function with `person1` as its `this` context
introduce.call(person1); // Output: "Hi, my name is Alice"

// Call the `introduce` function with `person2` as its `this` context
introduce.call(person2); // Output: "Hi, my name is Bob"

// Task 3
function sum(a, b) {
  // A function `sum` that calculates the sum of `a` and `b`, then multiplies the result by `this.multiplier`
  return (a + b) * this.multiplier;
}
