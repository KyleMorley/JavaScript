const resetGame = require('./reset');

test('Ensure resetGame set True chances reaches 0', () => {
    expect(resetGame(0)).toBeTruthy()
})

test('Ensure resetGame remains set to False when chances are at one', () => {
    expect(resetGame(1)).toBeFalsy()
})