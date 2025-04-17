import { Circle, Calculator } from "../kodutöö";

test("Circle area calculation", () => {
    const circle = new Circle(10);
    expect(circle.getArea()).toBeCloseTo(Math.PI * 100);
});

test("Circle perimeter calculation", () => {
    const circle = new Circle(10);
    expect(circle.getPerimeter()).toBeCloseTo(2 * Math.PI * 10);
});

test("Calculator functionality", () => {
    const calculator = new Calculator();
    calculator.pressButton("1");
    calculator.pressButton("+");
    calculator.pressButton("2");
    expect(calculator.getPanelContents()).toBe("1+2");
});