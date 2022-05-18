let name = 'Sofia';

function calc(){
    const name = 'john';
    const age = 25;
    becomesGlobal = 'global variable'
}


calc();
//console.log(age); throws error
console.log(becomesGlobal)

if (true){
    const name = 'john';
}

console.log(`my name is ${name} and i like it`)
