const person = {
  name: "Hitesh",
  age: 19.5,
  introduce() {
    return `Hi, my name is ${this.name} and I am ${this.age} years old`;
  },
};

function outer() {
  function inner() {
    return "Inner function called";
  }
  return inner();
}
