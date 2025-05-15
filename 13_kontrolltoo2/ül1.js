//Koosta liides Sisend meetodiga boolean kysi(); Koosta realiseeriv klass, mi sees määratav väärtus true või false. Koosta klass AND-loogika tarbeks, millel sees kaks sisendit. Loo ka selle meetod kysi(); Kui mõlemad sisendid on true-väärtusega, siis tagasta true, muidu false.
var realiseerivKlass = /** @class */ (function () {
    function realiseerivKlass(maaravVaartus) {
        this.maaravVaartus = maaravVaartus;
    }
    realiseerivKlass.prototype.kysi = function () {
        return this.maaravVaartus;
    };
    return realiseerivKlass;
}());
var andLoogika = /** @class */ (function () {
    function andLoogika(sisend1, sisend2) {
        this.sisend1 = sisend1;
        this.sisend2 = sisend2;
    }
    andLoogika.prototype.kysi = function () {
        return this.sisend1.kysi() && this.sisend2.kysi();
    };
    return andLoogika;
}());
var sisend1 = new realiseerivKlass(true);
var sisend2 = new realiseerivKlass(true);
var väljund12 = new andLoogika(sisend1, sisend2);
console.log(väljund12.kysi());
