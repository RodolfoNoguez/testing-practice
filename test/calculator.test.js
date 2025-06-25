const Calculator = require("../files/calculator");

const calculator = new Calculator;

test('addition calculation', () => {
    expect(calculator.add(3,1)).toBe(4);
});
test('subtract calculation', () => {
    expect(calculator.subtract(1,1)).toBe(0);
});
test('multiply calculation', () => {
    expect(calculator.multiply(4,2)).toBe(8);
});
test('divide calculation', () => {
    expect(calculator.divide(8,2)).toBe(4);
});

