//Omaloodud funktsioon

//Igaüks koostab temaatilise spetsiifilise funktsiooni ning demonstreerib selle tööd näitandmete abil.

//Arvutus võib olla lihtne, aga lugejatel/kuulajatel võiks käsitletava teema kohta midagi õppida olla.

function SõnaKontrollija(tähed: string, sõnad: string[]): string[] {
    let sorteeriTähed = (s: string) => s.split("").sort().join("");
    let sisestatudTähed = sorteeriTähed(tähed);
    
    return sõnad.filter(sõna => sorteeriTähed(sõna) === sisestatudTähed);
}

let sõnadeLoend = ["kass","koer","kala","küpsis","kool","tallinn","õlu"];

console.log(SõnaKontrollija("ksipsü", sõnadeLoend));
console.log(SõnaKontrollija("saõklus", sõnadeLoend));
console.log(SõnaKontrollija("litnnal", sõnadeLoend));
console.log(SõnaKontrollija("reoK", sõnadeLoend));