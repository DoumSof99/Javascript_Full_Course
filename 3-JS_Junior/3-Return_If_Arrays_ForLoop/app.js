const gas = [20, 40, 100, 30];
const food = [10, 20, 50];

function CalculateTotal(arr){
    let total = 0;
    for (let i=0; i<arr.length; i++){
        total += arr[i];
    }
    if(total>100){
        console.log('Above 100, you spent too much!');
        return total;
    }
    console.log('less than 100!');
    return total;
}

const gasTotal = CalculateTotal(gas);
const foodTotal = CalculateTotal(food);
const randomTotal = CalculateTotal([200, 4000, 500, 1]);

console.log({
    gas: gasTotal,
    food: foodTotal,
    random: randomTotal,
});