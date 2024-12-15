/* 
1. Write a function named `makeTea` that takes one parameter, `typeOfTea`, and 
returns a string like `"Making green tea"` when called with `"green tea"`. 
Store the result in a variable named `teaOrder`.
*/

function makeTea(typeOfTea){
    return `Making ${typeOfTea}`
}
let teaOrder = makeTea("Masala chai");
console.log(teaOrder);

/* 
2. Create a function named `orderTea` that takes one parameter, `teaType`. Inside this function, 
create another function named `confirmOrder` that returns a message like `"Order confirmed for chai"`. 
Call `confirmOrder` from within `orderTea` and return the result.
*/

function orderTea(teaType){
    function confirmOrder(){
        return `Order confirmed for chai`;
    }
    return confirmOrder();
}

let order = orderTea("chai");
console.log(order)

/* 
3. Write an arrow function named `calculateTotal` that takes two parameters: 
`price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`. 
Store the result in a variable named `totalCost`.
*/

const calculateTotal = (price , quantity) => price * quantity;
let total = calculateTotal(22,11);
console.log(total);

/* 
4. Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument `"earl grey"`. 
Return the result of calling `makeTea`.
*/

function maketea1(typeOfTea1){
    return `maketea : ${typeOfTea1}`
}

function processTeaOrder1(fn){
    return fn('EARL GRAY');
}

let order1 = processTeaOrder1(maketea1);
console.log(order1);

/* 
5. Write a function named `createTeaMaker` that returns another function. 
The returned function should take one parameter, `teaType`, and return a message like `"Making green tea"`. 
Store the returned function in a variable named `teaMaker` and call it with `"green tea"`.
*/

function createTeaMaker(){
    return function(teaType3){
        return `making ${teaType3}`
    };
}
let teaMaker5 = createTeaMaker();
console.log(teaMaker5("Green tea"));