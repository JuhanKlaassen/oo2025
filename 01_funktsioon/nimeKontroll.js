//Omaloodud funktsioon
//Igaüks koostab temaatilise spetsiifilise funktsiooni ning demonstreerib selle tööd näitandmete abil.
//Arvutus võib olla lihtne, aga lugejatel/kuulajatel võiks käsitletava teema kohta midagi õppida olla.
function SõnaKontrollija(tähed, sõnad) {
    var sorteeriTähed = function (s) { return s.split("").sort().join(""); };
    var sisestatudTähed = sorteeriTähed(tähed);
    return sõnad.filter(function (sõna) { return sorteeriTähed(sõna) === sisestatudTähed; });
}
var sõnadeLoend = ["kass", "koer", "kala", "küpsis", "kool", "tallinn", "õlu"];
console.log(SõnaKontrollija("ksipsü", sõnadeLoend));
console.log(SõnaKontrollija("saõklus", sõnadeLoend));
console.log(SõnaKontrollija("litnnal", sõnadeLoend));
console.log(SõnaKontrollija("vreok", sõnadeLoend));
