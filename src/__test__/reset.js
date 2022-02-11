function resetGame(x) {
    let setGameOver;
    let chances = x;

    return chances > 0 ? setGameOver = false : setGameOver = true;
}

module.exports = resetGame