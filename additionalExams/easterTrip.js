function easterTrip(input) {
    let destination = input[0];
    let date = input[1];
    let nights = Number(input[2]);
    let cost = 0;

    switch(destination) {
        case 'France':
            if (date === '21-23') {
                cost = 30 * nights;
            } else if (date === '24-27') {
                cost = 35 * nights;
            } else if (date === '28-31') {
                cost = 40 * nights;
            }
        break;
        case 'Italy':
            if (date === '21-23') {
                cost = 28 * nights;
            } else if (date === '24-27') {
                cost = 32 * nights;
            } else if (date === '28-31') {
                cost = 39 * nights;
            }
        break;
        case 'Germany':
            if (date === '21-23') {
                cost = 32 * nights;
            } else if (date === '24-27') {
                cost = 37 * nights;
            } else if (date === '28-31') {
                cost = 43 * nights;
            }
        break;
    }
    console.log(`Easter trip to ${destination} : ${cost.toFixed(2)} leva.`);
}
easterTrip(['Germany','24-27','5']);