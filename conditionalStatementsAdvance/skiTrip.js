function skiTrip(input) {
    let days = Number(input[0]);
    let type = input[1];
    let feedback = input[2];
    let pricePerNight = 0;
    let cost = 0;
    let nights = days - 1;

    if (type === 'room for one person') {
        pricePerNight = 18;
        cost = pricePerNight * nights;
    } else if (type === 'apartment') {
        pricePerNight = 25;
        cost = pricePerNight * nights;
        if (days < 10) {
            cost *= 0.7;
        } else if (days >= 10 && days <= 15) {
            cost *= 0.65;
        } else if (days > 15) {
            cost *= 0.5;
        }
    } else if (type === 'president apartment') {
        pricePerNight = 35;
        cost = pricePerNight * nights;
        if (days < 10) {
            cost *= 0.9;
        } else if (days >= 10 && days <= 15) {
            cost *= 0.85;
        } else if (days > 15) {
            cost *= 0.8;
        }
    }

    if (feedback === 'positive') {
        cost *= 1.25;
    } else if (feedback === 'negative') {
        cost *= 0.9;
    }
    console.log(cost.toFixed(2));
}
skiTrip(['14','apartment','positive']);