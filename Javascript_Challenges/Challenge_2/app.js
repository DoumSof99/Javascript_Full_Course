 /*

 create car obj
 add make, model, year, colors
 two methods drive and stop
 invoke both methods

 */

const car = {
    make: 'opel',
    model: 'corsa',
    year: 2002,
    colors: ['black', 'grey'],
    hybrid: false,
    drive: function () {
        console.log('driving...');
    },
    stop(){
        console.log('stoped!!!');
    }
};

console.log(car.make);
console.log(car.colors[1]);
car.drive();
car.stop();




