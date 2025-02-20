var TaksoSõit = /** @class */ (function () {
    function TaksoSõit(sihtkoht, pikkus, hind, kasOnÖö) {
        this.sihtkoht = sihtkoht;
        this.pikkus = pikkus;
        this.hind = hind;
        this.kasOnÖö = kasOnÖö;
    }
    TaksoSõit.prototype.sõiduHind = function () {
        var tasu = this.pikkus * this.hind;
        if (this.kasOnÖö) {
            tasu *= 1.2;
        }
        return tasu;
    };
    TaksoSõit.prototype.sõiduInfo = function () {
        return "Sihtkoht: " + this.sihtkoht + ", Vahemaa: " + this.pikkus + " km" + ", Hind: " + this.sõiduHind().toFixed(2) + "€";
    };
    return TaksoSõit;
}());
var sõit1 = new TaksoSõit("Tallinn -> Tartu", 210, 0.5, false);
var sõit2 = new TaksoSõit("Tallinn -> Pärnu", 130, 0.3, true);
console.log(sõit1.sõiduInfo());
console.log(sõit2.sõiduInfo());
