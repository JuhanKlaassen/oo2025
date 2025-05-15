//trip simulation
//classes are vehicle, trip simulation, driver?, vehicle subclasses define engine type?
//trip simulation accounts for speed depending on highway/city driving, acceleration from stops and deceleration to stops, cargo/passenger weight
var vehicle = /** @class */ (function () {
    function vehicle(fuelAmount, fuelCapacity, averageConsumption, normalWeight) {
        if (fuelAmount < 0 || fuelCapacity <= 0 || averageConsumption <= 0 || normalWeight <= 0) {
            throw new Error("Invalid input: All values must be positive.");
        }
        this.fuelAmount = fuelAmount;
        this.fuelCapacity = fuelCapacity;
        this.averageConsumption = averageConsumption;
        this.normalWeight = normalWeight;
        this.odometer = 0;
        if (this.fuelAmount > this.fuelCapacity) {
            throw new Error("The amount of fuel in the car cannot exceed " + fuelCapacity + " liters of fuel!");
        }
    }
    vehicle.prototype.drive = function (trip, highwaySpeed, citySpeed) {
        if (highwaySpeed <= 0 || citySpeed <= 0) {
            throw new Error("Speed must be greater than 0.");
        }
        var totalDistance = trip.totalDistance();
        var consumptionAddon = trip.stopsCalc();
        var newConsumption = this.averageConsumption * consumptionAddon;
        var necessaryFuel = (totalDistance / 100) * newConsumption;
        if (necessaryFuel > this.fuelAmount) {
            throw new Error("Tank requires " + necessaryFuel + " liters of fuel but contains only " + this.fuelAmount + " liters of fuel.");
        }
        else {
            this.odometer += totalDistance;
            this.fuelAmount -= necessaryFuel;
        }
    };
    vehicle.prototype.fillUp = function (addAmount) {
        if (addAmount < 0) {
            throw new Error("Cannot add a negative amount of fuel.");
        }
        if (this.fuelAmount + addAmount > this.fuelCapacity) {
            throw new Error("Cannot exceed fuel capacity of " + this.fuelCapacity + " liters.");
        }
        this.fuelAmount += addAmount;
    };
    vehicle.prototype.getFuelAmount = function () {
        return this.fuelAmount;
    };
    vehicle.prototype.getDistanceDriven = function () {
        return this.odometer;
    };
    return vehicle;
}());
var trip = /** @class */ (function () {
    function trip(cityDistance, highwayDistance, stops, passengers) {
        if (cityDistance < 0 || highwayDistance < 0 || stops < 0 || passengers < 0) {
            throw new Error("Invalid input: All values must be non-negative.");
        }
        this.cityDistance = cityDistance;
        this.highwayDistance = highwayDistance;
        this.stops = stops;
        this.passengers = passengers;
    }
    trip.prototype.totalDistance = function () {
        return this.cityDistance + this.highwayDistance;
    };
    trip.prototype.totalTime = function (citySpeed, highwaySpeed) {
        if (citySpeed <= 0 || highwaySpeed <= 0) {
            throw new Error("Speed must be greater than 0.");
        }
        var highwayTime = this.highwayDistance / highwaySpeed;
        var cityTime = this.cityDistance / citySpeed;
        return (highwayTime + cityTime) * 60;
    };
    trip.prototype.stopsCalc = function () {
        return 1 + this.stops * 0.02;
    };
    return trip;
}());
var Peugeot407 = new vehicle(50, 66, 7.8, 1480);
var randomDrive = new trip(15, 49, 8, 1);
console.log("Peugeot 407 Has " + Peugeot407.getFuelAmount() + " liters of fuel left");
console.log("Peugeot 407 has driven " + Peugeot407.getDistanceDriven() + " kilometers");
Peugeot407.drive(randomDrive, 90, 50);
console.log("Peugeot 407 Has " + Peugeot407.getFuelAmount() + " liters of fuel left");
console.log("Peugeot 407 has driven " + Peugeot407.getDistanceDriven() + " kilometers");
