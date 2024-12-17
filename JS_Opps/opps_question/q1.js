// Step 1: Define the Animal constructor function
function Animal() {
  // Constructor function for the Animal class
  // Can initialize properties here if needed
}

// Step 2: Add a method to Animal's prototype
Animal.prototype.speak = function () {
  // This method will be available to all instances of Animal
  return `Animal speaking`;
};

// Step 3: Define the Dog constructor function
function Dog() {
  // Constructor function for the Dog class
  // Can initialize Dog-specific properties here if needed
}

// Step 4: Inherit Animal's prototype for Dog
Dog.prototype = Object.create(Animal.prototype);
/*
   - `Object.create(Animal.prototype)` creates a new object that 
     has `Animal.prototype` as its prototype.
   - This step establishes the prototype chain, so `Dog` inherits 
     all methods from `Animal.prototype`.
   - Now, Dog.prototype has access to `Animal.prototype.speak`.
*/

// Step 5: Add a new method to Dog's prototype
Dog.prototype.bark = function () {
  // This is a method specific to Dog
  return `Woof!`;
};

// Step 6: Reset the Dog constructor reference
Dog.prototype.constructor = Dog;
/*
   - When we set `Dog.prototype` to `Object.create(Animal.prototype)`, 
     it overwrites the original `constructor` property.
   - We reset `Dog.prototype.constructor` back to `Dog` to ensure it 
     correctly refers to the Dog function.
*/

// Example usage:
const myDog = new Dog();
console.log(myDog.speak()); // Inherited from Animal: Output -> "Animal speaking"
console.log(myDog.bark()); // Defined in Dog: Output -> "Woof!"
console.log(myDog.constructor); // Correctly points to Dog
