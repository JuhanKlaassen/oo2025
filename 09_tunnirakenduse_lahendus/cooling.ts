class cooling{
 roomTemperature:number;

 constructor(roomTemperature:number){
    this.roomTemperature = roomTemperature;
 }


 esimateInitTemp( knownJugTemp: number, //Starting temperature
    knownTime:number, //Time taken to cool down (30sec)
    knownCooling:number, //By how much the water has cooled
    desiredTime:number, //New time interval
    desiredCooling:number, //How much cooling we want
 ):number {
    let knownTimeDifference = knownJugTemp - this.roomTemperature;
    let coolingRate = knownCooling/(knownTimeDifference * knownTime);
    let requiredTimeDifference = desiredCooling / (coolingRate * desiredTime);

    return this.roomTemperature + requiredTimeDifference;
 }
}

let c = new cooling(20);
console.log("Initial temp: ",c.esimateInitTemp(80, 30, 1, 60, 1));
console.log("Initial temp: ",c.esimateInitTemp( 40, 100, 1, 100, 3));

