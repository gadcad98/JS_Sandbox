// --------------- DATA TYPES ---------------

// PRIMITIVE TYPES

// String
const name = 'John Doe';
// Number
const age = 45;
// Boolean
const hasKids = true;
// Null
const car = null;
// Undefined
let test;
// Symbol
const sym = Symbol();

console.log(typeof name);
console.log(typeof age);
console.log(typeof hasKids);
console.log(typeof car); // prints "object" however null is not an object this is a bug with js
console.log(typeof test);
console.log(typeof sym);

// REFERENCE TYPES - Objects

// Array
const hobbies = ['movies', 'music'];
// Object literal
const addresss = {
    city: 'Mesa',
    state: 'AZ'
};

const today = new Date();

console.log(today);
console.log(typeof today)