# `bind`, `call`, and `apply` in JavaScript

## Overview
These methods allow you to control the value of `this` when working with functions.

---

## 1. `call()`
- **Description**: Invokes a function immediately and sets `this` explicitly.
- **Syntax**:
  ```javascript
  functionName.call(thisArg, arg1, arg2, ...)
  ```
- **Example**:
  ```javascript
  const person = { name: "Sam" };

  function greet(greeting) {
      console.log(`${greeting}, my name is ${this.name}`);
  }

  greet.call(person, "Hello"); // Output: Hello, my name is Sam
  ```

---

## 2. `apply()`
- **Description**: Similar to `call`, but arguments are passed as an array.
- **Syntax**:
  ```javascript
  functionName.apply(thisArg, [arg1, arg2, ...])
  ```
- **Example**:
  ```javascript
  const person = { name: "Sam" };

  function introduce(greeting, punctuation) {
      console.log(`${greeting}, my name is ${this.name}${punctuation}`);
  }

  introduce.apply(person, ["Hi", "!"]); // Output: Hi, my name is Sam!
  ```

---

## 3. `bind()`
- **Description**: Returns a new function with `this` permanently set to a specific value.
- **Syntax**:
  ```javascript
  const boundFunction = functionName.bind(thisArg, arg1, arg2, ...)
  ```
- **Example**:
  ```javascript
  const person = { name: "Sam" };

  function greet() {
      console.log(`Hi, my name is ${this.name}`);
  }

  const boundGreet = greet.bind(person);
  boundGreet(); // Output: Hi, my name is Sam
  ```

---

## Key Differences
| **Method**  | **Invocation**               | **Arguments**                             | **Returns**             |
|-------------|------------------------------|-------------------------------------------|-------------------------|
| `call`      | Immediately invokes function | Passed individually (comma-separated)     | Return value of function |
| `apply`     | Immediately invokes function | Passed as an array                        | Return value of function |
| `bind`      | Does **not** invoke function | Passed individually (optionally partial)  | A new bound function     |

---

## Use Cases
- **`call` and `apply`**: For immediate invocation with a specific `this` context.
- **`bind`**: To create a reusable function with `this` bound to a specific context.
