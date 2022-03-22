function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishmans = Number(input[2]);
    let rent = 0;

    switch(season) {
        case 'Spring':
            rent = 3000;
            if (fishmans % 2 === 0) {
                rent *= 0.95;
            }
        break;
        case 'Summer':
            rent = 4200;
            if (fishmans % 2 === 0) {
                rent *= 0.95;
            }
        break;
        case 'Autumn':
            rent = 4200;
        break;
        case 'Winter':
            rent = 2600;
            if (fishmans % 2 === 0) {
                rent *= 0.95;
            }
        break;
        
    }
    if (fishmans <= 6) {
        rent *= 0.9;
    } else if (fishmans >= 7 && fishmans <= 11) {
        rent *= 0.85;
    } else if (fishmans >= 12) {
        rent *= 0.75;
    }
    let diff = Math.abs(budget - rent);
    if (budget >= rent) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else if (budget < rent) {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
}
fishingBoat(['3600','Autumn','6']);