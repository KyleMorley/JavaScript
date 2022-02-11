const addPoint = require('./addPoint');

test('Check to see point is added', () => {
    expect(addPoint()).toBe(1)
})