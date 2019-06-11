// -------------- NUMBERS AND THE MATH OBJECT -----------------

const num1 = 100;
const num2 = 60;
let val;

// Simple Math With Numbers
val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;

// Math Object (hover mouse over the method [.sqrt, etc])
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(2,33,4,1,55,6,-2); // finds the lowest number
val = Math.max(2,33,4,1,55,6,-2); // finds the highest number
val = Math.random(); // gives random decimal
val = Math.floor(Math.random() * 20 + 1); // random whole number between 1 and 20

console.log(val);