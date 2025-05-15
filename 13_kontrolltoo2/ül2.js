//Koosta liides Sisend meetodiga boolean kysi(); Koosta realiseeriv klass, mi sees määratav väärtus true või false. Koosta klass AND-loogika tarbeks, millel sees kaks sisendit. Loo ka selle meetod kysi(); Kui mõlemad sisendid on true-väärtusega, siis tagasta true, muidu false.
//Võimalda sarnaseid AND-öüöitusi puukujulisse skeemi kokku ühendada. Anna igale lülitusele nimi. Tipuelemendilt väärtuse küsimisel trükitakse järgemööda välja, milliselt lülituselt väärtus küsiti ning milline vastus saadi.
var realiseerivKlass = /** @class */ (function () {
    function realiseerivKlass(maaravVaartus, nimi) {
        this.maaravVaartus = maaravVaartus;
        this.nimi = nimi;
    }
    realiseerivKlass.prototype.kysi = function () {
        console.log("Küsiti lülitilt " + this.nimi + " mille väärtus on: " + this.maaravVaartus);
        return this.maaravVaartus;
    };
    return realiseerivKlass;
}());
var andLoogika = /** @class */ (function () {
    function andLoogika(sisend1, sisend2, nimi) {
        this.sisend1 = sisend1;
        this.sisend2 = sisend2;
        this.nimi = nimi;
    }
    andLoogika.prototype.kysi = function () {
        //return this.sisend1.kysi() && this.sisend2.kysi();
        var loogika1 = this.sisend1.kysi();
        var loogika2 = this.sisend2.kysi();
        var loogikaTulemus = loogika1 && loogika2;
        console.log("Küsiti lülitit " + this.nimi + " mille väärtuseks: " + loogikaTulemus);
        return loogikaTulemus;
    };
    return andLoogika;
}());
var sisend1 = new realiseerivKlass(true, "sisend1");
var sisend2 = new realiseerivKlass(true, "sisend2");
var väljund12 = new andLoogika(sisend1, sisend2, "väljund12");
console.log(väljund12.kysi());
var sisend3 = new realiseerivKlass(false, "sisend3");
var väljund123 = new andLoogika(väljund12, sisend3, "väljund123");
console.log(väljund123.kysi());
