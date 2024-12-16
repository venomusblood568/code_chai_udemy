// How to access prototype 
let computer = {Cpu : 18 };
let lenevo = {Screen: "Hd"};
let mac  = {gen:12};

console.log(mac.__proto__)

// real life example
let genericCAR = { types: 4, 
                    seats:4,
                    body:"steel + iron"
};
let tesla = { driver: "AI" };

// Correctly set the prototype of tesla to genericCAR
Object.setPrototypeOf(tesla, genericCAR);

console.log(tesla); // tesla now inherits from genericCAR
console.log(tesla.seats); // Access inherited property from genericCAR
console.log(tesla.body)