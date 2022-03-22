function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let persons = Number(input[1]);
    let costPerPerson = Number(input[2]);
    let clothes = persons * costPerPerson;
    let decor = budget * 0.1;
    let discount = 0;

    if (persons > 150) {
        discount = clothes * 0.1;
    }
    let costForClothes = clothes - discount;

    let costForMovie = costForClothes + decor;
     if (budget >= costForMovie) {
         let leftMoney = budget - costForMovie;
         console.log('Action!');
         console.log(`Wingard starts filming with ${leftMoney.toFixed(2)} leva left.`);
     } else if (budget < costForMovie) {
         let neededMoney = costForMovie - budget;
         console.log('Not enough money!') 
         console.log(`Wingard needs ${neededMoney.toFixed(2)} leva more.`);
     }
}
godzillaVsKong(['15437.62','186','57.99']);