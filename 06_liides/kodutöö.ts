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
    constructor(brand: string,  efficiency: number, fuelAmount: number) {
        this.brand = brand;
        this.efficiency = efficiency;
        this.fuelAmount = fuelAmount;
    }
    getRange(): number {
        return Math.round(this.fuelAmount * this.efficiency);
    }
}

class CombustionCar implements Car {
    brand: string;
    fuelConsumption: number;
    fuelAmount: number;
    constructor(brand:string, fuelConsumption: number, fuelAmount: number) {
        this.brand = brand;
        this.fuelConsumption = fuelConsumption;
        this.fuelAmount = fuelAmount;
    }
    getRange(): number {
        return Math.round((this.fuelAmount / this.fuelConsumption) * 100);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");
    if (!output) return;
    
    const cars: Car[] = [
        new ElectricCar("Renault 5 EV", 7.3, 52),
        new CombustionCar("Peugeot 407 bensiin", 7.8, 66),
        new CombustionCar("Audi A4 diisel", 5.5, 54)
    ];
    
    cars.forEach(car => {
        const div = document.createElement("div");
        div.textContent = `${car.brand} - Kütusetangi/Aku suurus: ${fuelAmount} Sõiduulatus: ${car.getRange(fuelAmount)} km`;
        output.appendChild(div);
    });
});
