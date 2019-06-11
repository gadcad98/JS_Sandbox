const firstName = 'William';
const lastName = 'Johnson';
const age = 37;
const str = 'Hello there my name is Kyle';
const tags = 'Web design, Web development, Programming'

// console.log(firstName, lastName);

let val;

val = firstName + lastName;

// Appending (using +=)
val = 'Kyle ';
val += 'Denman';

// Concatenation
val = firstName + ' ' + lastName;

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping (using [\] instead of single and double quotes to continue a string)
val = 'That\'s awesome, I can\'t wait!';

// .length
val = firstName.length;

// .concat
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toLowerCase();
val = firstName.toUpperCase();

val = firstName[1];

// indexOf()
val = firstName.indexOf('l'); // finds first occurence of the letter "l"
val = firstName.lastIndexOf('l'); // finds the last occurence of the duplcate letter "l"

// charAt()
val = firstName.charAt('2');

// Get last character
val = firstName.charAt(firstName.length -1);

// substring()
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3);

// split()
val = str.split(' ');
val = tags.split(', ');

// replace()
val = str.replace('Kyle', 'Brad');

// includes()
val = str.includes('Hello');

console.log(val);