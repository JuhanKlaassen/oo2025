function kehamassiindeks(cm, kg) {
    var m = cm / 100;
    return kg / (m * m);
}
function kehamassiindeks2(cm, kg) {
    var m = cm / 100;
    return (kg * 1.3) / (Math.pow(m, 2.5));
}
console.log(kehamassiindeks(191, 82));
var massid = [80, 90, 97, 72, 78, 82];
var pikkused = [191, 181, 172, 193, 201, 165, 189, 175];
for (var _i = 0, massid_1 = massid; _i < massid_1.length; _i++) {
    var mass = massid_1[_i];
    console.log(kehamassiindeks(191, mass));
}
var indeksid = massid.map(function (mass) { return kehamassiindeks(191, mass); });
console.log(indeksid);
//Looge teine valem kehamassiindeksi arvutamiseks
//1,3 korda kehakaal / pikkus astmest 2,5
//aitab käsklus math.pow
//Arvutage kehamassiindeks mitmesuguste massidega sama pikkuse juures
//Näidake, kuidas väärtused erinevad.
var indeksid2 = massid.map(function (mass) { return kehamassiindeks2(191, mass); });
console.log(indeksid);
//arvutage mõlema valemiga sama massi ja eri pikkuste juures
var indeksid3 = pikkused.map(function (pikkus) { return kehamassiindeks2(pikkus, 82); });
console.log(indeksid3);
var vastus = [];
for (var pikkus = 150; pikkus < 190; pikkus += 2) {
    vastus.push([pikkus, kehamassiindeks(pikkus, 90), kehamassiindeks2(pikkus, 90)]);
}
console.log(vastus);
//console.log(kehamassiindeks(191, 82));
