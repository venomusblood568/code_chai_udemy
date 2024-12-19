// Task 1
function Animal() {} // Define a base Animal constructor function
Animal.prototype.makeSound = function () {
  return `Animal sound`; // Add a method to Animal's prototype to make a generic sound
};

function Dog() {} // Define a Dog constructor function

Dog.prototype = Object.create(Animal.prototype); // Set Dog's prototype to an object created from Animal's prototype

Dog.prototype.bark = function () {
  return `Woof!`; // Add a specific method to Dog's prototype for barking
};
Dog.prototype.constructor = Dog; // Reset Dog's constructor property to refer to Dog itself

// Task 2
function Shape(color) {
  this.color = color; // Initialize the Shape object with a color property
}
Shape.prototype.getColor = function () {
  return this.color; // Add a method to Shape's prototype to retrieve the color
};

function Rectangle(width, height, color) {
  Shape.call(this, color); // Call the Shape constructor with the color to inherit its properties
  this.width = width; // Initialize the Rectangle's width property
  this.height = height; // Initialize the Rectangle's height property
}
Rectangle.prototype = Object.create(Shape.prototype); // Set Rectangle's prototype to an object created from Shape's prototype
Rectangle.prototype.constructor = Rectangle; // Reset Rectangle's constructor property to refer to Rectangle itself
Rectangle.prototype.getArea = function () {
  return this.width * this.height; // Add a method to Rectangle's prototype to calculate the area
};
