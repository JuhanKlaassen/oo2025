var TaksoSõit = /** @class */ (function () {
    function TaksoSõit(sihtkoht, pikkus, hind, kasOnÖö) {
        this.sihtkoht = sihtkoht;
        this.pikkus = pikkus;
        this.hind = hind;
        this.kasOnÖö = kasOnÖö;
    }
    TaksoSõit.prototype.getPrice = function () {
        var price = this.pikkus * this.hind;
        if (this.kasOnÖö) {
            price *= 1.2;
        }
        return price;
    };
    TaksoSõit.prototype.getRideInfo = function () {
        return "Sihtkoht: " + this.sihtkoht + ", Vahemaa: " + this.pikkus + " km" + ", Hind: " + this.getPrice().toFixed(2) + "€";
    };
    return TaksoSõit;
}());
var ride1 = new TaksoSõit("Tallinn - Tartu", 180, 0.5, false);
var ride2 = new TaksoSõit("Tallinn - Pärnu", 130, 0.5, true);
console.log(ride1.getRideInfo());
console.log(ride2.getRideInfo());
