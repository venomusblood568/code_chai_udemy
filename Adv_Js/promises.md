# Promises and Promise Chaining in JavaScript

## What is a Promise?
A **Promise** is an object representing the eventual completion or failure of an **asynchronous operation**.

### States of a Promise:
1. **Pending**: Initial state, neither fulfilled nor rejected.
2. **Fulfilled**: The operation completed successfully.
3. **Rejected**: The operation failed.

### Syntax
```javascript
const promise = new Promise((resolve, reject) => {
  // Async task
  if (success) {
    resolve("Task completed");
  } else {
    reject("Task failed");
  }
});

promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
```

---

## What is Promise Chaining?
Promise Chaining allows you to execute **multiple asynchronous operations** sequentially, where each `.then()` passes its result to the next `.then()`.

### Example:
```javascript
const promise = new Promise((resolve) => {
  resolve(2);
});

promise
  .then((value) => {
    console.log(value); // 2
    return value * 2;
  })
  .then((value) => {
    console.log(value); // 4
    return value * 3;
  })
  .then((value) => {
    console.log(value); // 12
  })
  .catch((error) => console.error(error));
```

### Output:
```
2
4
12
```

---

## Key Points
- Promises help manage async code and avoid **callback hell**.
- `.then()` handles fulfilled promises.
- `.catch()` handles errors in the chain.
- Promises can be chained to perform sequential operations.

---