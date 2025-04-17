class Car {
    fuelLevel: number;
    fuelConsumption: number;
    maxFuel: number = 0;
    speed: number;
    distanceDriven: number = 0;

    constructor(fuelLevel: number, fuelConsumption: number, speed: number, maxFuel: number) {

        this.fuelLevel = fuelLevel;
        this.fuelConsumption = fuelConsumption;
        this.speed = speed;
        this.maxFuel = maxFuel;

        if (fuelLevel > this.maxFuel) {
            throw new Error("The fuel tank cannot exceed " + this.maxFuel + " liters of fuel");
        }

    }

    drive(minutes: number): void {
        let hours = minutes / 60;
        let distance = this.speed * hours;
        let fuelNeeded = (distance / 100) * this.fuelConsumption;
    
        if (fuelNeeded > this.fuelLevel) {
            console.log("The fuel ran out");
            let maxDistance = (this.fuelLevel / this.fuelConsumption) * 100;
            this.distanceDriven += maxDistance;
            this.fuelLevel = 0;
        } else {
            this.distanceDriven += distance;
            this.fuelLevel -= fuelNeeded;
        }
    }

    refuel(liters: number): void {
        if (liters + this.fuelLevel > this.maxFuel) {
            throw new Error("The car cannot fit over " + this.maxFuel + " liters of fuel");
        }
        this.fuelLevel += liters;
    }

    getFuelLevel(): number {
        return this.fuelLevel;
    }

    getDistance(): number {
        return this.distanceDriven;
    }
}

let Peugeot407 = new Car(66, 7.8, 90, 66);
console.log("Peugeot 407 fuel amount: " + Peugeot407.getFuelLevel() + " liters");
Peugeot407.drive(500);
console.log("Peugeot 407 driven distance: " + Peugeot407.getDistance() + " km");
console.log("Peugeot 407 fuel amount: " + Peugeot407.getFuelLevel() + " liters");
Peugeot407.refuel(15);
Peugeot407.drive(45);
console.log("Peugeot 407 driven distance: " + Peugeot407.getDistance() + " km");
console.log("Peugeot 407 fuel amount: " + Peugeot407.getFuelLevel() + " liters");