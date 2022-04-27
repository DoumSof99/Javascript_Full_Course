/*

Create a function calculateTotal
add teo parameters subTotal and Tax
returns sum of parameters

create tree vars order1, 2, 3
call calculateTotal, pass in some vallues and assign result to each order

*/

function calculateTotal(subTotal, Tax){
    const total = subTotal + Tax;
    return total;
}

//console.log(calculateTotal(200, 20));

const order1 = calculateTotal(100, 10);
const order2 = calculateTotal(10, 5);
const order3 = calculateTotal(50, 20);

console.log(order1, order2, order3);




