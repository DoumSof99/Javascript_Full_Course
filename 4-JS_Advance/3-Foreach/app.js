const people = [
    { name: 'sofia', age: 23, position: 'senior developer' },
    { name: 'Maria', age: 26, position: 'mid developer' },
    { name: 'Bob', age: 33, position: 'junior developer' }
];

function ShowPerson(person) {
    console.log(person.position.toUpperCase());
}

people.forEach( function (item) {
    console.log(item.position.toUpperCase());
});