var Car = /** @class */ (function () {
    function Car(fuelLevel, fuelConsumption, speed, maxFuel) {
        this.maxFuel = 0;
        this.distanceDriven = 0;
        this.fuelLevel = fuelLevel;
        this.fuelConsumption = fuelConsumption;
        this.speed = speed;
        this.maxFuel = maxFuel;
        if (fuelLevel > this.maxFuel) {
            throw new Error("Tank ei tohi olla üle " + this.maxFuel + " liitri!");
        }
    }
    Car.prototype.drive = function (minutes) {
        var hours = minutes / 60;
        var distance = this.speed * hours;
        var fuelNeeded = distance * this.fuelConsumption;
        if (fuelNeeded > this.fuelLevel) {
            console.log("Kütus sai otsa enne sihtpunkti jõudmist.");
            var maxDistance = this.fuelLevel / this.fuelConsumption;
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
            throw new Error("Auto tanki ei mahu üle " + this.maxFuel + " liitri");
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
var Peugeot407 = new Car(66, 7.8, 94, 66);
console.log("Peugeot 407 kütuse tase: " + Peugeot407.getFuelLevel() + " liitrit");
Peugeot407.drive(90);
console.log("Peugeot 407 sõidetud vahemaa: " + Peugeot407.getDistance() + " km");
Peugeot407.refuel(10);
