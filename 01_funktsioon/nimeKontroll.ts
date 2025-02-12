function SõnaKontrollija(tähed: string, sõnad: string[]): string[] {
    let sorteeriTähed = (s: string) => s.split("").sort().join(""); // Sorteerime tähed järjekorda
    let sisestatudTähed = sorteeriTähed(tähed);
    
    return sõnad.filter(sõna => sorteeriTähed(sõna) === sisestatudTähed);
}

// Näidisandmed: võimalike sõnade loend
let sõnadeLoend = ["kass","koer","kala","küpsis","kool","tallinn","õlu"];

// Testime funktsiooni erinevate sisenditega
console.log(SõnaKontrollija("ksipsü", sõnadeLoend));
console.log(SõnaKontrollija("saõklus", sõnadeLoend));
console.log(SõnaKontrollija("litnnal", sõnadeLoend));
console.log(SõnaKontrollija("vreok", sõnadeLoend));