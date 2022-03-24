function finalCompetition(input) {
    let dancers = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let destination = input[3];
    let money = 0;

    switch(destination) {
        case 'Bulgaria':
            money = dancers * points;
            if (season === 'summer') {
                money *= 0.95;
            } else if (season === 'winter') {
                money *= 0.92;
            }
        break;
        case 'Abroad':
            money = (dancers * points) * 1.5;
            if (season === 'summer') {
                money *= 0.9;
            } else if (season === 'winter') {
                money *= 0.85;
            }
        break;
    }

    let leftMoney = money * 0.25;
    let charity = money - leftMoney;
    let moneyPerDancer = leftMoney / dancers;

    console.log(`Charity - ${charity.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`);
}
finalCompetition(['1','89.5','summer','Abroad']);