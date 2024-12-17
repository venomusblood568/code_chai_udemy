// Base class Vehicle
class Vehicle {
  // Constructor to initialize properties of the Vehicle class
  constructor(make, model) {
    this.make = make; // Vehicle make (e.g., Toyota, Honda)
    this.model = model; // Vehicle model (e.g., Corolla, Civic)
  }

  // Method to get vehicle details
  getDetails() {
    return `Make: ${this.make}, Model: ${this.model}`; // Returns formatted string with vehicle details
  }

  // Method to define movement behavior
  move() {
    return "The vehicle is moving"; // Default implementation for vehicle movement
  }

  // Static method to check if an object is an instance of the Vehicle class
  static isVehicle(obj) {
    return obj instanceof Vehicle; // Returns true if obj is an instance of Vehicle
  }
}

// Subclass Car that extends Vehicle
class Car extends Vehicle {
  // Method specific to Car: starting the engine
  startEngine() {
    return "Engine started"; // Behavior unique to cars
  }

  // Overriding the move method from the Vehicle class
  move() {
    return "The car is driving"; // Custom implementation for cars
  }
}

// Example usage:
const myCar = new Car("Toyota", "Camry"); // Creating an instance of Car
console.log(myCar.getDetails()); // Output: "Make: Toyota, Model: Camry"
console.log(myCar.startEngine()); // Output: "Engine started"
console.log(myCar.move()); // Output: "The car is driving"

console.log(Vehicle.isVehicle(myCar)); // Output: true (checks if myCar is a Vehicle)
