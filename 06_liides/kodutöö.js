var electricCar = /** @class */ (function () {
    function electricCar(batteryCapacity, efficiency) {
        this.brand = "Renault 5 EV";
    }
    electricCar.prototype.getRange = function (fuelAmount) {
        return fuelAmount * this.efficiency;
    };
    return electricCar;
}());
var petrolCar = /** @class */ (function () {
    function petrolCar(fuelConsumption) {
        this.brand = "Peugeot 407";
    }
    petrolCar.prototype.getRange = function (fuelAmount) {
        return (fuelAmount / this.fuelConsumption) * 100;
    };
    return petrolCar;
}());
var dieselCar = /** @class */ (function () {
    function dieselCar(fuelConsumption) {
        this.brand = "Audi A4";
    }
    dieselCar.prototype.getRange = function (fuelAmount) {
        return (fuelAmount / this.fuelConsumption) * 100;
    };
    return dieselCar;
}());
document.addEventListener("DOMContentLoaded", function () {
    var output = document.getElementById("output");
    if (!output)
        return;
    var cars = [
        new electricCar(75, 6),
        new petrolCar(7.8),
        new dieselCar(5.5)
    ];
    cars.forEach(function (car) {
        var fuelAmount = 50;
        var div = document.createElement("div");
        div.textContent = "".concat(car.brand, " - S\u00F5iduulatus ").concat(fuelAmount, " \u00FChikuga: ").concat(car.getRange(fuelAmount), " km");
        output.appendChild(div);
    });
});
