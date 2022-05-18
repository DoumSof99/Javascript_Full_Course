// Callback function

function GoodMorning(name){
    const myName = 'sof';
    console.log(`Good morning ${name}, i am ${myName}`);
}

function GoodAfternoon(name){
    const myName = 'Maria';
    console.log(`Good morning ${name}, i am ${myName}`);
}

//GoodMorning('Agapi')
//GoodAfternoon('Athina')

function morning(name){
    return `Good morning ${name.toUpperCase()}`;
}

function afternoon(name){
    return `Good afternoon ${name.repeat(3)}`;
}

function greet(name, cb){
    const myName = 'Sofia';
    console.log(`${cb(name)}, i am ${myName}`);
}

greet('Menia', morning);
greet('Isaak', afternoon);


