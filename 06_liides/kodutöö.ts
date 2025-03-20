interface Car {
    brand: string;
    fuelConsumption: number;
    fuelAmount: number;
    getRange(): number;
}

class ElectricCar implements Car {
    brand: string;
    fuelConsumption: number = 0;
    efficiency: number
    fuelAmount: number
    constructor(brand: string, fuelAmount: number, efficiency: number) {
        this.brand = brand;
        this.efficiency = efficiency;
        this.fuelAmount = fuelAmount;
    }
    getRange(fuelAmount: number): number {
        return fuelAmount * this.efficiency;
        this.
    }
}

class PetrolCar implements Car {
    brand: string;
    fuelConsumption: number;
    constructor(fuelConsumption: number) {
        this.brand = "Peugeot 407";
    }
    getRange(fuelAmount: number): number {
        return (fuelAmount / this.fuelConsumption) * 100;
    }
}


class DieselCar implements Car {
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
        new ElectricCar(75, 6),
        new PetrolCar(7.8),
        new DieselCar(5.5)
    ];
    
    cars.forEach(car => {
        const fuelAmount = 50;
        const div = document.createElement("div");
        div.textContent = `${car.brand} - Sõiduulatus ${fuelAmount} ühikuga: ${car.getRange(fuelAmount)} km`;
        output.appendChild(div);
    });
});
