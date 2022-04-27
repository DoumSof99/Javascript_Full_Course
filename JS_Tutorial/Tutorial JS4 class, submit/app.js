// Implicit Type Conversion

// const name = 'John';
// const lastName = 'Jordan'

// const value = name - lastName;
// console.log(value);

// let number1 = 10;
// let number2 = '23';
// const result = number1 + number2;

// console.log(result);

const randomNumber = 13;
document.querySelector('.form').addEventListener('submit',
    function (e){
        e.preventDefault();
        let value = document.getElementById('amount').value;
        value = parseInt(value);

        console.log('Input Value Type');
        console.log(value);
        console.log('Sum of two Values');
        console.log(randomNumber + value);
    })