function SõnaKontrollija(tähed, sõnad) {
    var sorteeriTähed = function (s) { return s.split("").sort().join(""); }; // Sorteerime tähed järjekorda
    var sisestatudTähed = sorteeriTähed(tähed);
    return sõnad.filter(function (sõna) { return sorteeriTähed(sõna) === sisestatudTähed; });
}
// Näidisandmed: võimalike sõnade loend
var sõnadeLoend = ["kass", "koer", "kala", "küpsis", "kool", "tallinn", "õlu"];
// Testime funktsiooni erinevate sisenditega
console.log(SõnaKontrollija("ksipsü", sõnadeLoend));
console.log(SõnaKontrollija("litnnal", sõnadeLoend));
console.log(SõnaKontrollija("vreok", sõnadeLoend));
console.log(SõnaKontrollija("saõklus", sõnadeLoend));
