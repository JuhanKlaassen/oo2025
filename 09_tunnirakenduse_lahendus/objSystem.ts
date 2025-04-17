//trip simulation
//classes are vehicle, trip simulation, driver?, vehicle subclasses define engine type?
//trip simulation accounts for speed depending on highway/city driving, acceleration from stops and deceleration to stops, cargo/passenger weight

class vehicle{
    fuelAmount:number;
    fuelCapacity:number;
    averageConsumption:number;
    normalWeight:number;
    odometer:number;


    constructor(fuelAmount:number, fuelCapacity:number, averageConsumption:number, normalWeight:number){
        this.fuelAmount = fuelAmount;
        this.fuelCapacity = fuelCapacity;
        this.averageConsumption = averageConsumption;
        this.normalWeight = normalWeight;

        if(this.fuelAmount > this.fuelCapacity){
            throw new Error("The amount of fuel in the car cannot exceed " + fuelCapacity + " liters of fuel!");
        }
    }

    drive(trip:trip, highwaySpeed:number, citySpeed:number){
        let totalDistance = trip.totalDistance();
        let consumptionAddon = trip.stopsCalc();
        let newConsumption = this.averageConsumption * consumptionAddon;

        let neccesaryFuel = (totalDistance/100) * newConsumption;
        if(neccesaryFuel > this.fuelAmount){
            throw new Error("Tank requires " + neccesaryFuel + " liters of fuel but contains only " + this.fuelAmount + " liters of fuel.");
            let maxDistance = (this.fuelAmount / newConsumption) * 100;
            this.odometer += maxDistance;
        } else {
            this.odometer += totalDistance;
            this.fuelAmount -= neccesaryFuel;
        }
    }
    fillUp(addAmount:number):void{
        this.fuelAmount += addAmount;
    }
    getFuelAmount(){
        return this.fuelAmount;
    }
    getDistanceDriven(){
        return this.odometer;
    }

}

class trip{
    cityDistance:number;
    highwayDistance:number;
    stops:number;
    passengers:number;

    constructor(cityDistance:number, highwayDistance:number, stops:number, passengers:number){
        this.cityDistance = cityDistance;
        this.highwayDistance = highwayDistance;
        this.stops = stops;
        this.passengers = passengers;
    }

    totalDistance():number{
        return this.cityDistance + this.highwayDistance;
    }

    totalTime(citySpeed:number, highwaySpeed:number):number{
        let highwayTime = this.highwayDistance/highwaySpeed;
        let cityTime = this.cityDistance/citySpeed;
        return (highwayTime + cityTime)*60
    }

    stopsCalc(){
        return 1 +(this.stops * 0.02);
    }
}

let Peugeot407 = new vehicle(50, 66, 7.8, 1480);
let randomDrive = new trip(15, 49, 8, 1);
console.log("Peugeot 407 Has " + Peugeot407.getFuelAmount() + " liters of fuel left");
console.log("Peugeot 407 has driven " + Peugeot407.getDistanceDriven() + " kilometers");
Peugeot407.drive(randomDrive, 90, 50);
console.log("Peugeot 407 Has " + Peugeot407.getFuelAmount() + " liters of fuel left");
console.log("Peugeot 407 has driven " + Peugeot407.getDistanceDriven() + " kilometers");