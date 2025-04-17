var ElectricCar = /** @class */ (function () {
    function ElectricCar(brand, efficiency, fuelAmount) {
        this.fuelConsumption = 0;
        this.brand = brand;
        this.efficiency = efficiency;
        this.fuelAmount = fuelAmount;
    }
    ElectricCar.prototype.getRange = function () {
        return Math.round(this.fuelAmount * this.efficiency);
    };
    return ElectricCar;
}());
var CombustionCar = /** @class */ (function () {
    function CombustionCar(brand, fuelConsumption, fuelAmount) {
        this.brand = brand;
        this.fuelConsumption = fuelConsumption;
        this.fuelAmount = fuelAmount;
    }
    CombustionCar.prototype.getRange = function () {
        return Math.round((this.fuelAmount / this.fuelConsumption) * 100);
    };
    return CombustionCar;
}());
document.addEventListener("DOMContentLoaded", function () {
    var output = document.getElementById("output");
    if (!output)
        return;
    var cars = [
        new ElectricCar("Renault 5 EV", 7.3, 52),
        new CombustionCar("Peugeot 407 bensiin", 7.8, 66),
        new CombustionCar("Audi A4 diisel", 5.5, 54)
    ];
    cars.forEach(function (car) {
        var div = document.createElement("div");
        div.textContent = "".concat(car.brand, " - K\u00FCtusetangi/Aku suurus: ").concat(fuelAmount, " S\u00F5iduulatus: ").concat(car.getRange(fuelAmount), " km");
        output.appendChild(div);
    });
});
