function toyShop(input) {
    let puzzle = 2.6;
    let doll = 3;
    let bear = 4.1;
    let minion = 8.2;
    let truck = 2;
    let discount = 0;

    let costForTrip = Number(input[0]);
    let numberOfPuzzles = Number(input[1]);
    let numberOfDolls = Number(input[2]);
    let numberOfBears = Number(input[3]);
    let numberOfMinions = Number(input[4]);
    let numberOfTrucks = Number(input[5]);

    let price = puzzle * numberOfPuzzles + doll * numberOfDolls + bear * numberOfBears +minion * numberOfMinions + truck * numberOfTrucks;
    let numberOfToys = numberOfTrucks + numberOfPuzzles + numberOfMinions + numberOfDolls + numberOfBears;
    if (numberOfToys >= 50) {
        discount = price * 0.25;
    }
    let finalPrice = price - discount;
    let rent = finalPrice * 0.1;
    let profit = finalPrice - rent;
    if (profit >= costForTrip) {
        let leftMoney = profit - costForTrip;
        console.log(`Yes! ${leftMoney.toFixed(2)} lv left.`);
    } else if (profit < costForTrip) {
        let notEnough = costForTrip - profit;
        console.log(`Not enough money! ${notEnough.toFixed(2)} lv needed.`)
    }
}
toyShop(['40.8','20','25','30','50','10']);