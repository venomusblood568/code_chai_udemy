// Encapsulation > add a #in front of the name that how you declare 
class bankAccount {
    #balance = 5;

    getbalance(amount) {
        this.#balance += amount;
        return `Total amount = ${this.#balance}`;
    }

    viewBalance() {
        return `Current balance = ${this.#balance}`;
    }
}

let account = new bankAccount();
// console.log(account.viewBalance()); // View the balance
// console.log(account.getbalance(10)); // Add amount and see updated balance
// console.log(account.viewBalance()); // View the balance again


// Abstraction => the process of hiding the internal details of an application from the outer world

class coffeemachine{
    start(){
        //do bunch of things
        return `Machine started!!`
    }
    brew(){
        //do bunch of things again
        return `brewing started`
    }
    button(){
        let msg1 = this.start()
        let msg2 = this.brew()
        return `${msg1} and ${msg2}`
    }
}

let mymachine = new coffeemachine();
console.log(mymachine.button());

// Polymorphism
class bird{
    fly(){
        return `Birds can fly`
    }
}

class chicken extends bird{
    fly(){
        return `Chicken can't fly`
    }
}

let parrot = new bird()
console.log(parrot.fly())
let chick = new chicken()
console.log(chick.fly())

//static keyword => A static function is used only by its parent (or its class). 
//It can't be called directly from other instances or non-static methods unless 
//through the class name or a reference to the static context.

class calculator{
    static add(a,b){
        return a + b
    }
}

console.log(calculator.add(2,3))


class Person {
  // Private-like variable with an underscore
  constructor(name) {
    this._name = name;
  }
  get name(){
    return this._name
  }
  set name(newName){
    if(newName.length > 0){
        this._name = newName
    }
    else{
        console.log("name cannot be empty");
    }
  }
}

// Example usage
const person = new Person("John");

// Using the getter
console.log(person.name); // Output: John

// Using the setter
person.name = "Doe";
console.log(person.name); // Output: Doe

// Invalid input
person.name = ""; // Output: Name cannot be empty.
