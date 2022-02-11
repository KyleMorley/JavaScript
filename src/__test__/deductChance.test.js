const deductChance = require('./deductChance');

test('Expect deductChance function to negate 5 by 1', () => {
    expect(deductChance()).toBe(4)
})