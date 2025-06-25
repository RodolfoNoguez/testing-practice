const reverseString = require('../files/reverseString');

test('string is reversed', () => {
    expect(reverseString('rodolfo')).toBe('oflodor');
});

