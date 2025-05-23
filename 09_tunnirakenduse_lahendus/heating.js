var Water = /** @class */ (function () {
    function Water(waterAmount, temperature) {
        this.heatingPower = 0;
        this.specialHeatCapacity = 4200;
        this.waterAmount = waterAmount;
        this.temperature = temperature;
    }
    Water.prototype.setHeatingPower = function (newPower) {
        this.heatingPower = newPower;
    };
    Water.prototype.getTemperature = function () {
        return this.temperature;
    };
    Water.prototype.heatASecond = function () {
        var joules = this.heatingPower;
        var deltaTemperature = joules / (this.specialHeatCapacity * this.waterAmount / 1000);
        this.temperature += deltaTemperature;
    };
    return Water;
}());
var w = new Water(800, 20);
w.setHeatingPower(1500);
for (var i = 0; i < 120; i++) {
    w.heatASecond();
    console.log(w.getTemperature());
}
console.log("Lõplik veetemperatuur on: ", w.getTemperature());
