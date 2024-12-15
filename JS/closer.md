Question asked was "what is called this behavior which keeps on going hunting variable?"
The answer is closure.

When a function is defined inside another function, it forms a closure. The inner function has access to:

1. Its own scope (variables defined within it).

2. The outer function's scope (variables and functions defined in the outer function).

3. Global scope (variables defined outside any function).

```
function outerFunction() {

    let outerVariable = "I am from outer scope";

   

    function innerFunction() {

        console.log(outerVariable);

    }

   

    return innerFunction;

}



const myClosure = outerFunction();

myClosure();
```
