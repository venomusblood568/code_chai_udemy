function Person(name, age) {
  if (age <= 0) {
    throw new Error("Age must be a positive number");
  }
  this.name = name;
  this.age = age;
  this.greet = function () {
    return `Hello, my name is ${name}`;
  };
}
