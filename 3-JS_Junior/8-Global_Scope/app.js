let name = 'maria';
name = 'sofia';

function Calc(){
    console.log(name);
    name = 'orange';
    function inner(){
        name = 'inner value';
        console.log(`this is from inner function ${name}`);
    }
    inner()
}

Calc();

if(true){
    console.log(name);
    name = 'peter';
}

console.log(`my name is ${name} !`);