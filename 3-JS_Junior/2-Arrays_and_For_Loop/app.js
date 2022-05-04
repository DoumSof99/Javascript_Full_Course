

const names = ['sofia', 'irene', 'anna'];
const lastNames = 'shakeandbake'
let newArray = [];

for (let i=0; i<names.length; i++){
    console.log(i);
    console.log(names[i]);
    const fullName = `${names[i]} ${lastNames}`;
    newArray.push(fullName);
}

console.log(names);
console.log(newArray);