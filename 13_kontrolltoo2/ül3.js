//Koosta liides Sisend meetodiga boolean kysi(); Koosta realiseeriv klass, mi sees määratav väärtus true või false. Koosta klass AND-loogika tarbeks, millel sees kaks sisendit. Loo ka selle meetod kysi(); Kui mõlemad sisendid on true-väärtusega, siis tagasta true, muidu false.
//Võimalda sarnaseid AND-öüöitusi puukujulisse skeemi kokku ühendada. Anna igale lülitusele nimi. Tipuelemendilt väärtuse küsimisel trükitakse järgemööda välja, milliselt lülituselt väärtus küsiti ning milline vastus saadi.
// Lisa ka OR ja NOT-lülitused. Katseta vähemalt viiest lülitusest koosneva skeemi juures...
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
var orLoogika = /** @class */ (function () {
    function orLoogika(sisend1, sisend2, nimi) {
        this.sisend1 = sisend1;
        this.sisend2 = sisend2;
        this.nimi = nimi;
    }
    orLoogika.prototype.kysi = function () {
        //return this.sisend1.kysi() && this.sisend2.kysi();
        var loogika1 = this.sisend1.kysi();
        var loogika2 = this.sisend2.kysi();
        var loogikaTulemus = loogika1 || loogika2;
        console.log("Küsiti lülitit " + this.nimi + " mille väärtuseks: " + loogikaTulemus);
        return loogikaTulemus;
    };
    return orLoogika;
}());
var notLoogika = /** @class */ (function () {
    function notLoogika(sisend, nimi) {
        this.sisend = sisend;
        this.nimi = nimi;
    }
    notLoogika.prototype.kysi = function () {
        var loogika = this.sisend.kysi();
        var loogikaTulemus = !loogika;
        console.log("Küsiti lülitit " + this.nimi + " mille väärtuseks : " + loogikaTulemus);
        return loogikaTulemus;
    };
    return notLoogika;
}());
var sisend1 = new realiseerivKlass(true, "sisend1");
var sisend2 = new realiseerivKlass(true, "sisend2");
var väljund12 = new andLoogika(sisend1, sisend2, "andVäljund");
console.log(väljund12.kysi());
var sisend3 = new realiseerivKlass(false, "sisend3");
var väljund123 = new andLoogika(väljund12, sisend3, "andVäljund2");
console.log(väljund123.kysi());
var sisend4 = new realiseerivKlass(true, "sisend4");
var väljund1234 = new orLoogika(väljund123, sisend4, "orVäljund");
console.log(väljund1234.kysi());
var väljund12345 = new notLoogika(väljund1234, "notVäljund");
console.log(väljund12345.kysi());
