function aritmeetiline(a, b, c) {
    return (a + b + c) / 3;
}
console.log(aritmeetiline(5, 9, 1));
function libisevAritmeetiline(massiiv) {
    var Keskmised = [];
    for (var i = 0; i < massiiv.length - 2; i++) {
        var keskmisedArvutus = (massiiv[i] + massiiv[i + 1] + massiiv[i + 2]) / 3;
        Keskmised.push(keskmisedArvutus);
    }
    return Keskmised;
}
console.log(libisevAritmeetiline([5, 2, 6, 8, 2, 1, 1, 6, 2, 3, 869]));
var LibisevKlass = /** @class */ (function () {
    function LibisevKlass(arvud, Keskmised) {
        this.arvud = arvud;
    }
    LibisevKlass.prototype.arvuLisaja = function (lisamiseks) {
        this.arvud.push(lisamiseks);
    };
    return LibisevKlass;
}());
