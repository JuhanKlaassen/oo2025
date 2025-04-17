var Car = /** @class */ (function () {
    function Car(fuelLevel, fuelConsumption, speed, maxFuel) {
        this.maxFuel = 0;
        this.distanceDriven = 0;
        this.fuelLevel = fuelLevel;
        this.fuelConsumption = fuelConsumption;
        this.speed = speed;
        this.maxFuel = maxFuel;
        if (fuelLevel > this.maxFuel) {
            throw new Error("The fuel tank cannot exceed " + this.maxFuel + " liters of fuel");
        }
    }
    Car.prototype.drive = function (minutes) {
        var hours = minutes / 60;
        var distance = this.speed * hours;
        var fuelNeeded = (distance / 100) * this.fuelConsumption;
        if (fuelNeeded > this.fuelLevel) {
            console.log("The fuel ran out");
            var maxDistance = (this.fuelLevel / this.fuelConsumption) * 100;
            this.distanceDriven += maxDistance;
            this.fuelLevel = 0;
        }
        else {
            this.distanceDriven += distance;
            this.fuelLevel -= fuelNeeded;
        }
    };
    Car.prototype.refuel = function (liters) {
        if (liters + this.fuelLevel > this.maxFuel) {
            throw new Error("The car cannot fit over " + this.maxFuel + " liters of fuel");
        }
        this.fuelLevel += liters;
    };
    Car.prototype.getFuelLevel = function () {
        return this.fuelLevel;
    };
    Car.prototype.getDistance = function () {
        return this.distanceDriven;
    };
    return Car;
}());
var Peugeot407 = new Car(66, 7.8, 90, 66);
console.log("Peugeot 407 fuel amount: " + Peugeot407.getFuelLevel() + " liters");
Peugeot407.drive(500);
console.log("Peugeot 407 driven distance: " + Peugeot407.getDistance() + " km");
console.log("Peugeot 407 fuel amount: " + Peugeot407.getFuelLevel() + " liters");
Peugeot407.refuel(15);
Peugeot407.drive(45);
console.log("Peugeot 407 driven distance: " + Peugeot407.getDistance() + " km");
console.log("Peugeot 407 fuel amount: " + Peugeot407.getFuelLevel() + " liters");
