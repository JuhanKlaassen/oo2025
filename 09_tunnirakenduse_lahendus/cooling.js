var cooling = /** @class */ (function () {
    function cooling(roomTemperature) {
        this.roomTemperature = roomTemperature;
    }
    cooling.prototype.esimateInitTemp = function (knownJugTemp, //Starting temperature
    knownTime, //Time taken to cool down (30sec)
    knownCooling, //By how much the water has cooled
    desiredTime, //New time interval
    desiredCooling) {
        var knownTimeDifference = knownJugTemp - this.roomTemperature;
        var coolingRate = knownCooling / (knownTimeDifference * knownTime);
        var requiredTimeDifference = desiredCooling / (coolingRate * desiredTime);
        return this.roomTemperature + requiredTimeDifference;
    };
    return cooling;
}());
var c = new cooling(20);
console.log("Initial temp: ", c.esimateInitTemp(80, 30, 1, 60, 1));
console.log("Initial temp: ", c.esimateInitTemp(40, 100, 1, 100, 3));
