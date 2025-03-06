// Koosta funktsioon ,kus antakse ette kahe ainekursuse ainepunktid ja hinded. Arvuta nende põhjal kaalutud keskmine.
//Kaalutud keskmine on (punktid*hinne)/kogupunktid

function aineKeskmine(p1:number, h1:number, p2:number, h2:number):number{
    return(((p1*h1)+(p2*h2))/(p1+p2));
}
console.log("Kahe aine kaalutud keskmine on: ", aineKeskmine(5, 4, 6, 2).toFixed(2));