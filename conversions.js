// -------------- TYPE CONVERSIONS ------------------

let val;

// Number to String
val = String(555);
val = String(4+4);

// Boolean to String
val = String(true);

// Date to String
val = String(new Date());

// Array to String
val = String([1,2,3,4]);

// toString()
val = (5).toString(); // Number
val = (true).toString(); // Boolean

// String to Numbers
val = Number('5'); // Outputs 5
val = Number(true); // Outputs 1 because true is 1
val = Number(false); // Outputs 0
val = Number(null); // Outputs 0
val = Number('hello'); // Outputs NaN 
val = Number([1,2,3]) // Outputs NaN <---- when values try to get parsed as a number but can't

val = parseInt('100'); // whole numbers
val = parseFloat('100.33'); // decimal numbers

// Output
console.log(val);
console.log(typeof val);
// console.log(val.length); // .length for Strings
console.log(val.toFixed(5)); // .toFixed for Numbers

// ----------------- TYPE COERSION ----------------

const val1 = String(5);
const val2 = 6;
const sum = val1 + val2; // Concatinates the 5 and six together to get 56

console.log(sum);
console.log(typeof sum);