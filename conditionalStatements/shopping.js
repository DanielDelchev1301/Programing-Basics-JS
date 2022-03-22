function shopping(input) {
    let budget = Number(input[0]);
    let videocards = Number(input[1]);
    let processor = Number(input[2]);
    let ramMemory = Number(input[3]);
    
    let costForVideocards = videocards * 250;
    let costForProcessor = (costForVideocards * 0.35) * processor;
    let costForRamMemory = (costForVideocards * 0.1) * ramMemory;
    let totalPrice = costForVideocards + costForRamMemory + costForProcessor;

    if (videocards > processor) {
        totalPrice *= 0.85;
    }
    if (totalPrice <= budget) {
        let leftMoney = budget - totalPrice;
        console.log(`You have ${leftMoney.toFixed(2)} leva left!`);
    } else if (totalPrice > budget) {
        let neededMoney = totalPrice - budget;
        console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva more!`);
    }
}
shopping(['900','2','1','3']);