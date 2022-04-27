// conditions

const value = false;

const value1 = 2 > 1;
const value2 = 1 > 2;

const num1 = 6;
const num2 = 6;
const num2_str = '6';
const result = num1 >= num2;

const number1 = num1 != num2;
const number2 = num1 === num2_str;

if (!value) {

    if (value2) {
        console.log('1 is greater than 2');
    } else {
        console.log('2 is greater than 1');
    }

    if (num1 > num2) {
        console.log('1 is greater than 2');
    } else if (num1 == num2) {
        console.log('equal numbers');
    } else {
        console.log('2 is greater than 1');
    }

    console.log(number1);
    console.log(number2);



}
