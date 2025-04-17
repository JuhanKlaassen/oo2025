export interface IShape {
    getArea(): number;
    getPerimeter(): number;
}

export class Circle implements IShape {
    constructor(private radius: number) {}

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

export class Calculator {
    private panelContent: string = "";

    pressButton(b: string): void {
        this.panelContent += b;
    }

    getPanelContents(): string {
        return this.panelContent;
    }
}

const myCircle = new Circle(5);
console.log("Circle with radius 5:");
console.log("Area:", myCircle.getArea());
console.log("Perimeter:", myCircle.getPerimeter());

const calculator = new Calculator();
calculator.pressButton("1");
calculator.pressButton("+");
calculator.pressButton("2");
console.log("Calculator Panel:", calculator.getPanelContents());
