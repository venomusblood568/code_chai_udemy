/*
What is Prototypal Inheritance?
- Prototypal Inheritance is a feature in JavaScript where objects can inherit 
  properties and methods from other objects.
- Instead of classes, JavaScript uses **prototypes** to implement inheritance.
*/

function Person(name){
    this.name = name
}

Person.prototype.greet = function(){
    console.log(`Hi, My name is ${this.name}`)
}

let me = new Person("SAM")
me.greet();