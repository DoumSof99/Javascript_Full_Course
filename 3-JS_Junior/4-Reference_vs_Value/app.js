//primitive data type
const number = 1;
let number2 = number;
number2 = 7;
console.log(`the first value is ${number}`);
console.log(`the second value is ${number2}`);

let kid = { name: 'sofia'};
let kid2 = { ...kid};
kid2.name = 'maria';
console.log(`first kid's name is ${kid.name}`);
console.log(`sencond kid's name is ${kid2.name}`);


//non-primitive data type
let person = { name: 'sofia'};
let person2 = person;
person2.name = 'maria';
console.log(`first person name is ${person.name}`);
console.log(`sencond person name is ${person2.name}`);

