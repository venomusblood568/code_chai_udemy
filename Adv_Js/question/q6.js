// Generator function that yields the numbers 1, 2, 3
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

// Iterator function to create a range of numbers from start to end
function rangeIterator(start, end) {
  let curr = start;
  return {
    next: function () {
      if (curr <= end) {
        return { value: curr++, done: false }; // Return the current number and increment it
      } else {
        return { value: undefined, done: true }; // Return `done` as true when the range ends
      }
    },
  };
}

// Generator function for Fibonacci sequence
function* fibonacciGenerator() {
  let a = 1;
  let b = 1;
  yield a; // Yield the first Fibonacci number
  yield b; // Yield the second Fibonacci number
  while (true) {
    let next = a + b;
    yield next; // Yield the next Fibonacci number
    a = b;
    b = next;
  }
}

// Additional code to demonstrate usage:

// 1. Using `numberGenerator`:
const numGen = numberGenerator(); // Create an iterator from the generator
console.log(numGen.next()); // { value: 1, done: false }
console.log(numGen.next()); // { value: 2, done: false }
console.log(numGen.next()); // { value: 3, done: false }
console.log(numGen.next()); // { value: undefined, done: true }

// 2. Using `rangeIterator`:
const range = rangeIterator(5, 10); // Create a range iterator from 5 to 10
console.log(range.next()); // { value: 5, done: false }
console.log(range.next()); // { value: 6, done: false }
console.log(range.next()); // { value: 7, done: false }
console.log(range.next()); // { value: 8, done: false }
console.log(range.next()); // { value: 9, done: false }
console.log(range.next()); // { value: 10, done: false }
console.log(range.next()); // { value: undefined, done: true }

// 3. Using `fibonacciGenerator`:
const fibGen = fibonacciGenerator(); // Create a Fibonacci generator
console.log(fibGen.next()); // { value: 1, done: false }
console.log(fibGen.next()); // { value: 1, done: false }
console.log(fibGen.next()); // { value: 2, done: false }
console.log(fibGen.next()); // { value: 3, done: false }
console.log(fibGen.next()); // { value: 5, done: false }
console.log(fibGen.next()); // { value: 8, done: false }
console.log(fibGen.next()); // { value: 13, done: false }
