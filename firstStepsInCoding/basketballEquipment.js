function basketballEquipment(input) {
    let priceForTrainingOneYear = Number(input[0]);

    let priceForShoes = priceForTrainingOneYear - (priceForTrainingOneYear * 0.4);
    let costForOutfit = priceForShoes - (priceForShoes * 0.2);
    let ball = costForOutfit * 0.25;
    let accessories = ball * 0.2;
    let totalPrice = priceForTrainingOneYear + priceForShoes + costForOutfit + ball + accessories;
    console.log(totalPrice);
}
basketballEquipment(['365']);