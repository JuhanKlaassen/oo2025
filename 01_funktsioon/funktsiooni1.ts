function kehamassiindeks(cm:number, kg:number):number{
    let m:number=cm/100;
    return kg/(m*m);
}

function kehamassiindeks2(cm:number, kg:number):number{
    let m:number=cm/100;
    return (kg*1.3)/(Math.pow(m,2.5));
}

console.log(kehamassiindeks(191,82));

let massid:number[]=[80, 90, 97, 72, 78, 82];

let pikkused:number[]=[191, 181, 172, 193, 201, 165, 189, 175];

for(let mass of massid){
    console.log(kehamassiindeks(191, mass));
}
let indeksid:number[]=massid.map(mass => kehamassiindeks(191, mass));
console.log(indeksid);

//Looge teine valem kehamassiindeksi arvutamiseks
//1,3 korda kehakaal / pikkus astmest 2,5
//aitab käsklus math.pow
//Arvutage kehamassiindeks mitmesuguste massidega sama pikkuse juures
//Näidake, kuidas väärtused erinevad.
let indeksid2:number[]=massid.map(mass => kehamassiindeks2(191, mass));
console.log(indeksid);
//arvutage mõlema valemiga sama massi ja eri pikkuste juures
let indeksid3:number[]=pikkused.map(pikkus => kehamassiindeks2(pikkus, 82));
console.log(indeksid3);
let vastus:number[][]=[];
for(let pikkus=150; pikkus<190; pikkus+=2){
    vastus.push([pikkus, kehamassiindeks(pikkus, 90), kehamassiindeks2(pikkus, 90)]);
}
console.log(vastus);
//console.log(kehamassiindeks(191, 82));