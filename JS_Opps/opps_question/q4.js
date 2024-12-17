class BankAccount {
  constructor(balance = 0) {
    if (balance < 0) {
      throw new Error("Balance cannot be negative");
    }
    this._balance = balance;
  }
  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Deposit amount should be positive");
    }
    this._balance += amount;
  }
  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Withdrawal amount should be positive");
    }
    if (this._balance - amount < 0) {
      throw new Error("Insufficient funds");
    }
    this._balance -= amount;
  }
  get balance() {
    return this._balance;
  }
  set balance(amount) {
    if (amount < 0) {
      throw new Error("Balance cannot be negative");
    }
    this._balance = amount;
  }
}

// Task 2

class Shape {
  area() {
    return 0;
  }
}
class Circle extends Shape {
  constructor(radius) {
    super();

    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}
class Rectangle extends Shape {
  constructor(length, width) {
    super();
    this.length = length;
    this.width = width;
  }
  area() {
    return this.length * this.width;
  }
}
