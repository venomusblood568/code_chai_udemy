# JavaScript Data Types

## 1. Primitive Types
Primitive types are immutable and stored by value.

- **String**: Represents text.
  - Example: `'Hello'`, `"World"`
- **Boolean**: Represents true or false.
  - Example: `true`, `false`
- **Number**: Represents both integers and floating-point numbers.
  - Example: `42`, `3.14`
- **null**: Represents the intentional absence of a value.
  - Example: `let value = null;`
- **undefined**: Represents an uninitialized variable.
  - Example: `let value;` (value is `undefined`)
- **Symbol**: Represents a unique, immutable identifier.
  - Example: `const id = Symbol('id');`

## 2. Non-Primitive Types
Non-primitive types are mutable and stored by reference.

- **Objects**: Collections of key-value pairs.
  - Example: `{ name: 'Sam', age: 25 }`
- **Arrays**: Ordered collections of values.
  - Example: `[1, 2, 3, 4]`
- **Functions**: Blocks of reusable code.
  - Example: 
    ```javascript
    function greet() {
      console.log('Hello');
    }
    ```
