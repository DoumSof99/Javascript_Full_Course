// String
const text = 'some text';
// Number
const number = 45;
// Boolean
let value = true;
// Object
const result = null;
// Undefined
let name;
// Symbol(ES6)
console.log(typeof text);
console.log(typeof number);
console.log(typeof value);
console.log(typeof result);
console.log(typeof name);

// Arrays
const friend1 = 'anna';
const friend2 = 'anna';
const friend3 = 'anna';
const friend4 = 'anna';

const friends = ['maria', 'athina', 'agapi', 44, 
undefined, null];

console.log(friends);
console.log(friends[2]);
console.log(friends[5]);

let bestFriend = friends[1];
friends[2] = 'anna';
console.log(friends[2]);
console.log(bestFriend);

