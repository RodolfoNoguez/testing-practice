const analyzeArray = require('../files/analyzeArray')

const arrayToBeAnalyzed = analyzeArray([1,8,3,4,2,6]);

test('array is analyzed 1', () => {
    expect(arrayToBeAnalyzed.average()).toBe(4);
});
test('array is analyzed 2', () => {
    expect(arrayToBeAnalyzed.min()).toBe(1);
});
test('array is analyzed 3', () => {
    expect(arrayToBeAnalyzed.max()).toBe(8);
});
test('array is analyzed 4', () => {
    expect(arrayToBeAnalyzed.length()).toBe(6);
});

