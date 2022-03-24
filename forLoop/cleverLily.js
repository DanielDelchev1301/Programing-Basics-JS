function cleverLily(input) {
    let lilyAge = Number(input[0]);
    let costForLaundry = Number(input[1]);
    let costPerToy = Number(input[2]);

    let moneyForBirthday = 0;
    let toyForBirthday = 0;
    let addedMoney = 10;

    for (let i = 1; i <= lilyAge; i++) {
        if (i % 2 === 0) {
            moneyForBirthday += addedMoney;
            addedMoney += 10;
            moneyForBirthday -= 1;
        } else {
            toyForBirthday++;
        }
    }

    let moneyFromToys = toyForBirthday * costPerToy;
    let collectedMoney = moneyForBirthday + moneyFromToys;

    if (collectedMoney >= costForLaundry) {
        let leftMoney = collectedMoney - costForLaundry;
        console.log(`Yes! ${leftMoney.toFixed(2)}`);
    } else {
        let neededMoney = costForLaundry - collectedMoney;
        console.log(`No! ${neededMoney.toFixed(2)}`);
    }
}
cleverLily(['10','170.00','6']);