# Asynchronous JavaScript and Event Loop

## What is Asynchronous JavaScript?
JavaScript is **single-threaded** with a synchronous execution model. However, asynchronous operations allow **non-blocking** behavior, enabling tasks like fetching data or waiting for timers without stopping the program flow.

---

## Key Concepts

### 1. **Call Stack**
- The **Call Stack** manages function calls in a **Last In, First Out (LIFO)** manner.
- **Blocking Operations** freeze the call stack, preventing further code execution.

### 2. **Web APIs**
- Provided by the browser or Node.js runtime.
- Handles asynchronous tasks like:
  - `setTimeout`, `setInterval`
  - DOM events
  - HTTP requests via `fetch()` or `XMLHttpRequest`
  - Promises and other async tasks.

### 3. **Callback Queue**
- Contains **callback functions** of asynchronous tasks waiting to be executed.

### 4. **Event Loop**
- The **Event Loop** monitors the Call Stack and Callback Queue.
- If the **Call Stack** is empty, the **Event Loop** pushes tasks from the Callback Queue to the Call Stack for execution.

---

## How It Works: Step-by-Step

1. **Synchronous Code** runs first and blocks the call stack.
2. **Asynchronous Code** (like `setTimeout`) is sent to Web APIs.
3. Once an async task completes:
   - Its callback is moved to the **Callback Queue**.
4. The **Event Loop** checks if the Call Stack is clear:
   - If **yes**, it pushes the callback to the Call Stack.
5. The process continues.

---

## Microtasks vs Macrotasks

### **Microtasks**: Higher Priority
- Tasks that are processed **immediately after the current script execution**.
- Examples: 
  - `Promises` (`.then`, `.catch`, `.finally`)
  - `MutationObserver`

### **Macrotasks**: Lower Priority
- Tasks pushed to the Callback Queue.
- Examples:
  - `setTimeout`, `setInterval`
  - `DOM events`

**Order**: Microtasks run before Macrotasks.

---

## Example Code

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
});

console.log("End");
```

**Output:**
```
Start
End
Promise 1
Timeout 1
```

### Why?
1. `Start` and `End` execute synchronously.
2. `Promise` is a **microtask**, so it runs before the `setTimeout`.
3. `setTimeout` is a **macrotask**, so it runs after the microtask queue is empty.

---

## Summary

1. **Call Stack**: Handles synchronous tasks.
2. **Web APIs**: Offload async tasks.
3. **Callback Queue**: Queue for async callbacks.
4. **Event Loop**: Pushes callbacks to the Call Stack when empty.
5. **Microtasks** have higher priority over Macrotasks.

---

## Must-Know Terms:
- **Callback**: A function executed after an async task completes.
- **Promise**: An object representing a future value.
- **Async/Await**: Modern syntax for handling Promises.
- **setTimeout**: Schedules tasks for later execution.

---
