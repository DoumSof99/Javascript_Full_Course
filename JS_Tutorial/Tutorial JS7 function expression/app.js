// Function Expression

function addValues(num1, num2){
    return num1 + num2;
}

const firstValue = addValues(3,4);
const secondValue = addValues(12,34);

const add = function (num1, num2){ return num1 + num2; }

const thirdValue = add(5,6);

const values = [firstValue, secondValue, thirdValue, add(1,2)];
console.log(values);

const multiply = (num1, num2) => num1 * num2;
console.log("Multiplication : " + multiply(2,4));
