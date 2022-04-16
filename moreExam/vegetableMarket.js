function vegetableMarket(input) {
    let pricePerKiloVeg = Number(input[0]);
    let pricePerKiloFru = Number(input[1]);
    let kiloVeg = Number(input[2]);
    let kiloFru = Number(input[3]);

    let costVeg = pricePerKiloVeg * kiloVeg;
    let costFru = pricePerKiloFru * kiloFru;

    let totalCost = costFru + costVeg;
    let inEuro = totalCost / 1.94;

    console.log(inEuro.toFixed(2));
}
vegetableMarket(['0.194','19.4','10','10']);