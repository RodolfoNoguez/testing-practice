const ceasarCipher = require('../files/ceasarCipher');

test('shift 1', () => {
    expect(ceasarCipher('abc', 1)).toBe('bcd');
});

test('shift', () => {
    expect(ceasarCipher('xyz', 3)).toBe('abc');
});

test('shift full name', () => {
    expect(ceasarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});