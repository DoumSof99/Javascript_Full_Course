const people = [
    { name: 'Sofia', age: 23, position: 'senior developer' },
    { name: 'Maria', age: 20, position: 'mid developer' },
    { name: 'Agapi', age: 21, position: 'junior developer' },
    { name: 'Irene', age: 22, position: 'beginner developer' },
];

const ages = people.map(function (person){
    return person.age + 10;
});

//console.log(ages);

const newPeople = people.map(function (person){
    return {
        firstName: person.name.toUpperCase(),
        aldAge: person.age + 20,
    };
});

//console.log(newPeople);

const names = people.map(function (person){
    return `<h1>${person.name}</h1>`;
});

document.body.innerHTML = names.join('');

console.log(names);

