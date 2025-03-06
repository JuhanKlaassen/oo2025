// Klassile saab lisada sooritatud ainete hindeid ja ainepunkte, välja küsida nende andmete põhjal parasjagu arvutatud kaalutud keskmine.
var kaalutudKeskmine = /** @class */ (function () {
    function kaalutudKeskmine() {
        this.ained = [];
    }
    kaalutudKeskmine.prototype.aineLisaja = function (punktid, hinded) {
        if (punktid <= 0 || hinded < 1 || hinded > 5) {
            throw new Error("Punkte peab olema rohkem kui 0 ja hinded peavad jääma vahemikku 1-5");
        }
        this.ained.push({ punktid: punktid, hinded: hinded });
    };
    kaalutudKeskmine.prototype.keskmiseArvutaja = function () {
        var kõikPunktid = 0;
        var kaalutud = 0;
        for (var _i = 0, _a = this.ained; _i < _a.length; _i++) {
            var aine = _a[_i];
            kõikPunktid += aine.punktid;
            kaalutud += aine.punktid * aine.hinded;
        }
        return (kaalutud / kõikPunktid);
    };
    return kaalutudKeskmine;
}());
var kogum = new kaalutudKeskmine();
kogum.aineLisaja(6, 5);
kogum.aineLisaja(4, 2);
kogum.aineLisaja(2, 3);
kogum.aineLisaja(2, 1);
console.log("Sooritatud ainete kaalutud keskmine on: ", kogum.keskmiseArvutaja().toFixed(2));
