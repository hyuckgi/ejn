function pikachuCalc(pikachuCount, candyCount) {
    const EVOLUTION_CANDY_COUNT = 12;
    let maxXP = 0;

    if (!pikachuCount) {
        return maxXP;
    } else if (candyCount < EVOLUTION_CANDY_COUNT) {
        let isEnoughPikachu = pikachuCount > EVOLUTION_CANDY_COUNT - candyCount;

        if (!isEnoughPikachu) {
            return maxXP;
        }

        let changedCandyCount = EVOLUTION_CANDY_COUNT - candyCount;
        pikachuCount -= changedCandyCount;
        candyCount += changedCandyCount;
    }

    candyCount -= EVOLUTION_CANDY_COUNT;
    pikachuCount--;

    maxXP += 500;
    candyCount++;

    return maxXP + pikachuCalc(pikachuCount, candyCount);
}

module.exports = pikachuCalc;
