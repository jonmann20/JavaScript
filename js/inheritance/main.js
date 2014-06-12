var car = new Car();

var sportsCar = new SportsCar(car);

console.log(car.determinePrice());
console.log(sportsCar.determinePrice());
console.log(car.getName, sportsCar.getName);
