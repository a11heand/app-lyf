/*

Filename: SophisticatedProgram.js

This code is a sophisticated and elaborate program that demonstrates advanced concepts and creative solutions.

*/

// Helper function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Class representing a person
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
  }
}

// Example usage of the Person class
const john = new Person("John", "Doe", 30);
john.greet();

// Array of objects representing employees
const employees = [
  { firstName: "John", lastName: "Doe", age: 30 },
  { firstName: "Alice", lastName: "Jones", age: 25 },
  { firstName: "Bob", lastName: "Smith", age: 35 }
];

// Function to filter employees based on their age
function filterEmployeesByAge(employees, minAge, maxAge) {
  return employees.filter(employee => employee.age >= minAge && employee.age <= maxAge);
}

// Example usage of the filterEmployeesByAge function
const filteredEmployees = filterEmployeesByAge(employees, 25, 35);
console.log(filteredEmployees);

// Generate 10 random numbers between 1 and 100
const randomNumbers = Array.from({ length: 10 }, () => getRandomNumber(1, 100));
console.log(randomNumbers);

// Function to calculate the factorial of a number
function calculateFactorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * calculateFactorial(num - 1);
  }
}

// Example usage of the calculateFactorial function
const factorialOf5 = calculateFactorial(5);
console.log(factorialOf5);

// Complex logic and calculations...

// ...

// Final result or output of the program
console.log("Program execution completed.");