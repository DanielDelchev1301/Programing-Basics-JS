function braceletStand(input) {
    let budgetPerDay = Number(input[0]);
    let earnMoney = Number(input[1]);
    let cost = Number(input[2]);
    let priceForPresent = Number(input[3]);

    let savedMoney = (budgetPerDay + earnMoney) * 5;
    let finalMoney = savedMoney - cost;

    if (finalMoney >= priceForPresent) {
        console.log(`Profit: ${finalMoney.toFixed(2)} BGN, the gift has been purchased.`);
    } else {
        let res = priceForPresent - finalMoney;
        console.log(`Insufficient money: ${res.toFixed(2)} BGN.`);
    }
}
braceletStand(['2.10','17.50','20.20','148.50']);