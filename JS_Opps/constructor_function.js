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
function Animal(species){
    this.species = species;
}

Animal.prototype.sound = function(){
    return`${this.species} make annoying sound`
}

let bat = new Animal("bat");
console.log(bat.sound());