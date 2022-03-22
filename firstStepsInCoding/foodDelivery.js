function foodDelivery(input) {
    let chickenMenu = 10.35;
    let fishMenu = 12.4;
    let veganMenu = 8.15;
    let delivery = 2.5;

    let countChickenMenus = Number(input[0]);
    let countFishMenus = Number(input[1]);
    let countVeganMenus = Number(input[2]);
    
    let costForChickenMenus = countChickenMenus * chickenMenu;
    let costForFishMenus = countFishMenus * fishMenu;
    let costForVeganMenus = countVeganMenus * veganMenu;
    let totalCostForMenus = costForChickenMenus + costForFishMenus + costForVeganMenus;
    let costForDessert = totalCostForMenus * 0.2;
    let totalPrice = totalCostForMenus + costForDessert + delivery;
    console.log(totalPrice);
}
foodDelivery(['5','3','4',]);