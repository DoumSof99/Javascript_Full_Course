let names = ['Agapi', 'Sofia', 'Maria', 'Irene', 'Menia'];

//length
console.log(names.length);
console.log(names[names.length - 1]);

//concat
const lastNames = ['Doumani', 'Boss', 'Vlachou'];
const allNames = names.concat(lastNames);
console.log(allNames);

//reverse
console.log(allNames.reverse());

//unshift 
allNames.unshift('susy');
allNames.unshift('anna');
console.log(allNames);

//shift
allNames.shift();
allNames.shift();
allNames.shift();
allNames.shift();
console.log(allNames);

//push
allNames.push('susy');
console.log(allNames);

//pop
allNames.pop();
console.log(allNames);

//splice - mutates original array
const specificNames = allNames.splice(1,3);
console.log(specificNames);
console.log(allNames);