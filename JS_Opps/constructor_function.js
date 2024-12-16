//keep in mind parameter_name name should be same 
function car(/*parameter_name*/ maker, model, color) {
  //this.parameter_name = parameter_name
  this.maker = maker;
  this.model = model;
  this.color = color;
}
/*
the linking of these two block of code is done by this and new keyword
this keyword provided the context to which one to call 
ane new keyword provided this should be the value of the parameter
*/
let mycar = new car("Toyota","hilux","black");
console.log(mycar);

// we can make several function inside each other
function tea(types){
    this.types = types;
    this.describe = function(){
        return `this is a cup of ${this.types}`
    }
}
let lemon_tea = new tea("Lemon Tea");
console.log(lemon_tea);
console.log(lemon_tea.describe())


// prototype method for linking 
/* Prototype chain 
the prototype chain is a mechanism that allows objects to inherit properties and methods from other objects. 
This chain is formed by linking objects to their prototypes. When you try to access a property or method on an object, 
JavaScript first checks if the object has that property. If it doesn’t, JavaScript checks the prototype of that object, and 
the search continues up the prototype chain until it reaches the Object.prototype at the top.
*/
function Animal(species){
    this.species = species;
}

Animal.prototype.sound = function(){
    return`${this.species} make annoying sound`
}

let bat = new Animal("bat");
console.log(bat.sound());