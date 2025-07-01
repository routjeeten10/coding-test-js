// Program-1.js
class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  calculate(operation) {
    switch (operation) {
      case "add": return this.a + this.b;
      case "subtract": return this.a - this.b;
      case "multiply": return this.a * this.b;
      case "divide": return this.b !== 0 ? this.a / this.b : "Error: Division by zero";
      default: return "Invalid operation";
    }
  }
}

// Usage Example
const calc = new Calculator(10, 5);
console.log("Addition:", calc.calculate("add"));
console.log("Division:", calc.calculate("divide"));