//Functions

const maria = 'maria';

function hello(){
    console.log('Hello from Sofia');
    console.log('Hello from Doumani');
    console.log('Hello from Da House!');
}

function greetings(name){
    console.log('Hello from ' + name);
}

hello();
hello();

greetings();
greetings(4);
greetings('Sofia');
greetings(maria);

// Continue

const wallWeight = 80;

function calculate(value){
    const newValue = value * 2.54
    console.log('The value in cm is: ' + newValue
    + ' cm');
    return newValue;
}

const width = calculate(100);
const height = calculate(wallWeight);

const dimensions = [width, height];
console.log(dimensions);



