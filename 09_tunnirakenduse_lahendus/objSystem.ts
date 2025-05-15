//trip simulation
//classes are vehicle, trip simulation, driver?, vehicle subclasses define engine type?
//trip simulation accounts for speed depending on highway/city driving, acceleration from stops and deceleration to stops, cargo/passenger weight

class vehicle {
    fuelAmount: number;
    fuelCapacity: number;
    averageConsumption: number;
    normalWeight: number;
    odometer: number;

    constructor(fuelAmount: number, fuelCapacity: number, averageConsumption: number, normalWeight: number) {
        if (fuelAmount < 0 || fuelCapacity <= 0 || averageConsumption <= 0 || normalWeight <= 0) {
            throw new Error("Invalid input: All values must be positive.");
        }

        this.fuelAmount = fuelAmount;
        this.fuelCapacity = fuelCapacity;
        this.averageConsumption = averageConsumption;
        this.normalWeight = normalWeight;
        this.odometer = 0;

        if (this.fuelAmount > this.fuelCapacity) {
            throw new Error("The amount of fuel in the car cannot exceed " + fuelCapacity + " liters of fuel!");
        }
    }

    drive(trip: trip, highwaySpeed: number, citySpeed: number) {
        if (highwaySpeed <= 0 || citySpeed <= 0) {
            throw new Error("Speed must be greater than 0.");
        }

        let totalDistance = trip.totalDistance();
        let consumptionAddon = trip.stopsCalc();
        let newConsumption = this.averageConsumption * consumptionAddon;

        let necessaryFuel = (totalDistance / 100) * newConsumption;
        if (necessaryFuel > this.fuelAmount) {
            throw new Error(
                "Tank requires " + necessaryFuel + " liters of fuel but contains only " + this.fuelAmount + " liters of fuel."
            );
        } else {
            this.odometer += totalDistance;
            this.fuelAmount -= necessaryFuel;
        }
    }

    fillUp(addAmount: number): void {
        if (addAmount < 0) {
            throw new Error("Cannot add a negative amount of fuel.");
        }

        if (this.fuelAmount + addAmount > this.fuelCapacity) {
            throw new Error("Cannot exceed fuel capacity of " + this.fuelCapacity + " liters.");
        }

        this.fuelAmount += addAmount;
    }

    getFuelAmount() {
        return this.fuelAmount;
    }

    getDistanceDriven() {
        return this.odometer;
    }
}

class trip {
    cityDistance: number;
    highwayDistance: number;
    stops: number;
    passengers: number;

    constructor(cityDistance: number, highwayDistance: number, stops: number, passengers: number) {
        if (cityDistance < 0 || highwayDistance < 0 || stops < 0 || passengers < 0) {
            throw new Error("Invalid input: All values must be non-negative.");
        }

        this.cityDistance = cityDistance;
        this.highwayDistance = highwayDistance;
        this.stops = stops;
        this.passengers = passengers;
    }

    totalDistance(): number {
        return this.cityDistance + this.highwayDistance;
    }

    totalTime(citySpeed: number, highwaySpeed: number): number {
        if (citySpeed <= 0 || highwaySpeed <= 0) {
            throw new Error("Speed must be greater than 0.");
        }

        let highwayTime = this.highwayDistance / highwaySpeed;
        let cityTime = this.cityDistance / citySpeed;
        return (highwayTime + cityTime) * 60;
    }

    stopsCalc() {
        return 1 + this.stops * 0.02;
    }
}

let Peugeot407 = new vehicle(50, 66, 7.8, 1480);
let randomDrive = new trip(15, 49, 8, 1);
console.log("Peugeot 407 Has " + Peugeot407.getFuelAmount() + " liters of fuel left");
console.log("Peugeot 407 has driven " + Peugeot407.getDistanceDriven() + " kilometers");
Peugeot407.drive(randomDrive, 90, 50);
console.log("Peugeot 407 Has " + Peugeot407.getFuelAmount() + " liters of fuel left");
console.log("Peugeot 407 has driven " + Peugeot407.getDistanceDriven() + " kilometers");