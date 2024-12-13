# How JavaScript Executes Code - Behind the Scenes

## 1. **Loading the Script (Parsing)**
When a JavaScript file is included in an HTML document (via `<script>`), the browser processes it in the following steps:

- **Browser parses HTML**: The browser parses the HTML document.
- **Download JavaScript**: If a `<script>` tag references an external JavaScript file, the browser downloads it.
- **Parse JavaScript**: The JavaScript engine parses the code into an Abstract Syntax Tree (AST).

---

## 2. **Compilation (Just-In-Time Compilation)**
Modern JavaScript engines like V8 (used by Chrome) use a Just-In-Time (JIT) compiler to optimize performance:

- **Lexical Analysis**: Breaks the JavaScript code into smaller tokens (like keywords and operators).
- **Parsing**: Converts the tokens into an Abstract Syntax Tree (AST).
- **JIT Compilation**: Dynamically converts the AST into machine code that the computer can execute at runtime.

---

## 3. **Execution Context**
When JavaScript executes code, it creates an **execution context**:

- **Global Execution Context**: The base context where JavaScript execution begins.
- **Function Execution Context**: Created whenever a function is invoked.

Each execution context contains:
- **Variable Environment**: Stores variables, functions, and parameters.
- **Lexical Environment**: Manages scope chains (outer variables and functions).
- **`this` Value**: Points to the current context or object.

---

## 4. **Memory Allocation (Heap & Stack)**
JavaScript uses two memory areas for code execution:

- **Stack**: Stores primitive values and function calls.
- **Heap**: Stores objects and functions requiring more memory.

When variables and functions are declared, they are stored in these memory areas.

---

## 5. **Event Loop (Concurrency Model)**
JavaScript is single-threaded but can handle asynchronous tasks via the **event loop**:

- **Call Stack**: Keeps track of functions currently being executed.
- **Task Queue**: Stores asynchronous tasks (e.g., `setTimeout`, `fetch`) until the call stack is free.
- **Event Loop**: Monitors the call stack and task queue, moving tasks from the queue to the stack when the stack is empty.

---

## 6. **Execution of Functions and Asynchronous Code**
JavaScript handles code execution as follows:

- **Synchronous Code**: Executes line by line, completing one task before starting another.
- **Asynchronous Code**: Tasks like `setTimeout`, `fetch`, and Promises are handled by the event loop and executed after synchronous code.

---

## 7. **Garbage Collection**
Unused variables and objects are cleaned up through garbage collection:

- JavaScript engines automatically reclaim memory that is no longer in use.
- This ensures efficient memory management during code execution.

---
