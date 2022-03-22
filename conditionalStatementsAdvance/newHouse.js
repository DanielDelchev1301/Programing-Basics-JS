function newHouse(input) {
    let type = input[0];
    let quantity = Number(input[1]);
    let budget = Number(input[2]);
    let cost = 0;
    let leftMoney = 0;
    let neededMoney = 0;

    switch(type) {
        case 'Roses':
            cost = quantity * 5; break;
        case 'Dahlias':
            cost = quantity * 3.8; break;
        case 'Tulips':
            cost = quantity * 2.8; break;
        case 'Narcissus':
            cost = quantity * 3; break;
        case 'Gladiolus':
            cost = quantity * 2.5; break;    
    }
    if (type === 'Roses' && quantity > 80 ) {
        cost *= 0.9;
    } else if (type === 'Dahlias' && quantity > 90) {
        cost *= 0.85;
    } else if (type === 'Tulips' && quantity > 80) {
        cost *= 0.85;
    } else if (type === 'Narcissus' && quantity < 120) {
        cost *= 1.15;
    } else if (type === 'Gladiolus' && quantity < 80) {
        cost *= 1.2;
    }
    if (budget >= cost) {
        leftMoney = budget - cost;
        console.log(`Hey, you have a great garden with ${quantity} ${type} and ${leftMoney.toFixed(2)} leva left.`);
    } else if (budget < cost) {
        neededMoney = cost - budget;
        console.log(`Not enough money, you need ${neededMoney.toFixed(2)} leva more.`);
    }
}
newHouse(['Tulips','88','260']);