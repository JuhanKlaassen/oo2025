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
            throw new Error("Tank ei tohi olla üle " + this.maxFuel + " liitri!");
        }

    }

    drive(minutes: number): void {
        let hours = minutes / 60;
        let distance = this.speed * hours;
        let fuelNeeded = distance * this.fuelConsumption;

        if (fuelNeeded > this.fuelLevel) {
            console.log("Kütus sai otsa enne sihtpunkti jõudmist.");
            let maxDistance = this.fuelLevel / this.fuelConsumption;
            this.distanceDriven += maxDistance;
            this.fuelLevel = 0;
        } else {
            this.distanceDriven += distance;
            this.fuelLevel -= fuelNeeded;
        }
    }

    refuel(liters: number): void {
        if (liters + this.fuelLevel > this.maxFuel) {
            throw new Error("Auto tanki ei mahu üle " + this.maxFuel + " liitri");
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

let Peugeot407 = new Car(66, 7.8, 94, 66);
console.log("Peugeot 407 kütuse tase: " + Peugeot407.getFuelLevel() + " liitrit");
Peugeot407.drive(90);
console.log("Peugeot 407 sõidetud vahemaa: " + Peugeot407.getDistance() + " km");
Peugeot407.refuel(10);