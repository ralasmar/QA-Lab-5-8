const {returnTwo, greeting, add} = require('./function')

test('should return the number 2', () => {
    expect(returnTwo()).toEqual(2)
});

test('should return greeting saying hello and the inputted name', () => {
    expect(greeting('Kiki')).toEqual("Hello, Kiki")
});

test('should be the sum of 2 numbers', () => {
    expect(add(1,2)).toEqual(3)
})