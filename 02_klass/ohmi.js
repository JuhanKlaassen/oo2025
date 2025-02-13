var Resistor = /** @class */ (function () {
    function Resistor(r) {
        this.r = 0;
        this.r = r;
    }
    Resistor.prototype.getCurrent = function (u) {
        return u / this.r;
    };
    return Resistor;
}());
var r1 = new Resistor(110);
console.log(r1.getCurrent(5));
var r2 = new Resistor(220);
console.log(r2.getCurrent(5));
var r3 = new Resistor(4700);
console.log(r3.getCurrent(5));
var takistused = [r1, r2, r3];
console.log(takistused);
var voolusumma = 0;
for (var _i = 0, takistused_1 = takistused; _i < takistused_1.length; _i++) {
    var takisti = takistused_1[_i];
    voolusumma += takisti.getCurrent(5);
}
console.log(voolusumma);
console.log(takistused.reduce(function (siiani, praegune) { return siiani + praegune.getCurrent(5); }, 0));
