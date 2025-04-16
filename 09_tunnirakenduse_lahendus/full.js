"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var simulation = /** @class */ (function () {
    function simulation(waterAmount, temperature, heatingPower, roomTemperature) {
        this.specialHeatCapacity = 4200;
        if (waterAmount > 2000) {
            throw new Error("Max jug size is 2 liters");
        }
        this.waterAmount = waterAmount;
        this.temperature = temperature;
        this.heatingPower = heatingPower;
        this.roomTemperature = roomTemperature;
        this.joulesPerKelvinSec = 1.0 * 4200 * 2 / (100 * (100 - 20));
    }
    simulation.prototype.getTemperature = function () {
        return this.temperature;
    };
    simulation.prototype.heatPer = function (seconds) {
        var joules = this.heatingPower * seconds;
        var deltaTemperature = joules / (this.specialHeatCapacity * this.waterAmount / 1000);
        this.temperature += deltaTemperature;
    };
    simulation.prototype.cool = function (seconds) {
        var joules = (this.temperature - this.roomTemperature) * this.joulesPerKelvinSec;
        var deltaTemperature = joules / (this.specialHeatCapacity * this.waterAmount / 1000);
        this.temperature -= deltaTemperature;
    };
    simulation.prototype.pourWater = function (pourAmount) {
        if (pourAmount >= this.waterAmount) {
            throw new Error("You cannot pour out more or equal to that of which is already there!");
        }
    };
    return simulation;
}());
var s = new simulation(1000, 100, 1500, 20);
console.log(s.getTemperature());
s.cool(100);
console.log(s.getTemperature());
for (var i = 0; i < 9; i++) {
    s.cool(100);
}
console.log(s.getTemperature());
var outsideTemperature = 20;
var kettle = new simulation(1000, 20, 1500, outsideTemperature);
var secondsToBoil = 0;
while (kettle.getTemperature() < 100) {
    kettle.heatPer(1);
    secondsToBoil++;
}
console.log("Water boiled in: ", secondsToBoil, "seconds.");
kettle.cool(60);
console.log(kettle.getTemperature());
kettle.pourWater(400);
kettle.cool(180);
console.log(kettle.getTemperature());
function simulateCooling(waterAmount, heatingPower, roomTemperature) {
    var heater = new simulation(waterAmount, 95, heatingPower, outsideTemperature);
    var secondsToCool = 0;
    while (heater.getTemperature() > 90) {
        kettle.cool(1);
        secondsToCool++;
    }
    console.log("Cooling simulation for", waterAmount, " at ", outsideTemperature);
    console.log("cooling from 95 to 90: ", secondsToCool);
    return secondsToCool;
}
simulateCooling();
