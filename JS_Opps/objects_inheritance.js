//Object
//when we create function inside the object its called *METHOD*
// and method keywords is constructor
// and since its a method we dont need to call function we can call directly
class vehicle{
    constructor(maker,model,color){
        this.maker = maker
        this.model = model
        this.color = color

    }
    blueprint(){
        return `${this.maker} is the maker of car and name of the model is ${this.model} and ${this.color} color is special color for this model`
    }
}

let audi = new vehicle("audi", "Q8", "black strom");
console.log(audi.blueprint());

class car extends vehicle{
    drive(){
         return `I drive ${this.maker} as my daily driver <= example of inheritance.`;
    }
}


let mycar = new car("Audi", "A6", "zade black");
console.log(mycar.drive());