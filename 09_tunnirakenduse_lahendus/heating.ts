
class Water{
    waterAmount: number;
    heatingPower:number=0;
    temperature: number;
    readonly specialHeatCapacity:number=4200;

    constructor(waterAmount, temperature:number){
        this.waterAmount = waterAmount;
        this.temperature = temperature;
    }

    setHeatingPower(newPower: number): void{
        this.heatingPower = newPower;
    }

    getTemperature():number {
        return this.temperature;
    }

    heatASecond(){
        let joules = this.heatingPower;
        let deltaTemperature = joules/(this.specialHeatCapacity * this.waterAmount / 1000);
        this.temperature += deltaTemperature;
    }
}

let w = new Water(800, 20);
w.setHeatingPower(1500);

for(let i=0; i<120; i++){
    w.heatASecond();
    console.log(w.getTemperature());
}

console.log("Lõplik veetemperatuur on: ", w.getTemperature());

