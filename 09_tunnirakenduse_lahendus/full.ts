import { error } from "console";

class simulation{
    waterAmount: number;
    heatingPower:number;
    temperature: number;
    roomTemperature:number;
    readonly specialHeatCapacity:number=4200;
    joulesPerKelvinSec:number;

    constructor(waterAmount, temperature:number, heatingPower:number, roomTemperature:number){

        if(waterAmount>2000){
            throw new Error("Max jug size is 2 liters");
        }
        this.waterAmount = waterAmount;
        this.temperature = temperature;
        this.heatingPower = heatingPower;
        this.roomTemperature = roomTemperature;
        this.joulesPerKelvinSec = 1.0 * 4200 * 2 / (100*(100-20));
    }

    getTemperature():number {
        return this.temperature;
    }

    heatPer(seconds: number):void{
        let joules = this.heatingPower * seconds;
        let deltaTemperature = joules/(this.specialHeatCapacity * this.waterAmount / 1000);
        this.temperature += deltaTemperature;
    }

    cool(seconds: number):void{
        let joules = (this.temperature - this.roomTemperature) * this.joulesPerKelvinSec;
        let deltaTemperature = joules / (this.specialHeatCapacity * this.waterAmount / 1000);
        this.temperature -= deltaTemperature;
    }

    pourWater(pourAmount: number):void {
        if(pourAmount >= this.waterAmount){
            throw new Error("You cannot pour out more or equal to that of which is already there!");
        }
    }


}




let s = new simulation (1000, 100, 1500, 20)
console.log(s.getTemperature());
s.cool(100);
console.log(s.getTemperature());
for(let i=0; i<9; i++){
    s.cool(100);
}
console.log(s.getTemperature());

let outsideTemperature:number = 20;
let kettle = new simulation(1000, 20, 1500, outsideTemperature);
let secondsToBoil = 0;
while (kettle.getTemperature()<100){
    kettle.heatPer(1);
    secondsToBoil++;
}
console.log("Water boiled in: ", secondsToBoil, "seconds.")
kettle.cool(60);
console.log(kettle.getTemperature());
kettle.pourWater(400);
kettle.cool(180);
console.log(kettle.getTemperature());

function simulateCooling(waterAmount:number, heatingPower:number, roomTemperature:number):number{
    let heater = new simulation(waterAmount, 95, heatingPower, outsideTemperature);
    let secondsToCool = 0;
    while(heater.getTemperature()>90){
        kettle.cool(1);
        secondsToCool++;
    }
    console.log("Cooling simulation for", waterAmount, " at ", outsideTemperature);
    console.log("cooling from 95 to 90: ", secondsToCool);
    return secondsToCool
}
simulateCooling();