// Arrays, functions and Object
// dot notation

const person = {
    name: 'Sofia',
    lastName: 'Doumani',
    age: 23,
    educaiton: false,
    inRelationship: true,
    siblings: ['maria', 'agapi'],
    greeting: function (){
        console.log('Hello I am a person');
    }
};

const age = person.age;
console.log(age);
person.name = 'John';
console.log(person.name);
console.log(person.siblings[1]);
person.greeting();
