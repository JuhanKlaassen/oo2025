interface Car {
    brand: string;
    fuelConsumption?: number;
    getRange(fuelAmount: number): number;
}

class electricCar implements Car {
    brand: string;
    batteryCapacity: number;
    efficiency: number
    constructor(batteryCapacity: number, efficiency: number) {
        this.brand = "Renault 5 EV";
    }
    getRange(fuelAmount: number): number {
        return fuelAmount * this.efficiency;
    }
}

class petrolCar implements Car {
    brand: string;
    fuelConsumption: number;
    constructor(fuelConsumption: number) {
        this.brand = "Peugeot 407";
    }
    getRange(fuelAmount: number): number {
        return (fuelAmount / this.fuelConsumption) * 100;
    }
}


class dieselCar implements Car {
    brand: string;
    fuelConsumption: number;
    constructor(fuelConsumption: number) {
        this.brand = "Audi A4";
    }
    getRange(fuelAmount: number): number {
        return (fuelAmount / this.fuelConsumption) * 100;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");
    if (!output) return;
    
    const cars: Car[] = [
        new electricCar(75, 6),
        new petrolCar(7.8),
        new dieselCar(5.5)
    ];
    
    cars.forEach(car => {
        const fuelAmount = 50;
        const div = document.createElement("div");
        div.textContent = `${car.brand} - Sõiduulatus ${fuelAmount} ühikuga: ${car.getRange(fuelAmount)} km`;
        output.appendChild(div);
    });
});
