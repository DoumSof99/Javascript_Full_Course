const people = [
    { name: 'Sofia', age: 23, position: 'senior developer' },
    { name: 'Maria', age: 20, position: 'mid developer' },
    { name: 'Agapi', age: 21, position: 'leader' },
    { name: 'Irene', age: 22, position: 'boss' },
];

const youngPeople = people.filter(function (person){
    return person.age <=21;
});

console.log(youngPeople);

const deveopers = people.filter(function (person){
    return person.position === 'senior developer';
});

console.log(deveopers);


