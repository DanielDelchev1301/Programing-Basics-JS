function solve(input) {
    let price = 0;
    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);
    if (town === 'Sofia') {
        if (product === 'coffee') {
            price = quantity * 0.5;
        } else if (product === 'water') {
            price = quantity * 0.8;
        } else if (product === 'beer') {
            price = quantity * 1.2;
        } else if (product === 'sweets') {
            price = quantity * 1.45;
        } else if (product === 'peanuts') {
            price = quantity * 1.6;
        }
    } else if (town === 'Plovdiv') {
        if (product === 'coffee') {
            price = quantity * 0.4;
        } else if (product === 'water') {
            price = quantity * 0.7;
        } else if (product === 'beer') {
            price = quantity * 1.15;
        } else if (product === 'sweets') {
            price = quantity * 1.30;
        } else if (product === 'peanuts') {
            price = quantity * 1.5;
        }
    } else if (town === 'Varna') {
        if (product === 'coffee') {
            price = quantity * 0.45;
        } else if (product === 'water') {
            price = quantity * 0.7;
        } else if (product === 'beer') {
            price = quantity * 1.1;
        } else if (product === 'sweets') {
            price = quantity * 1.35;
        } else if (product === 'peanuts') {
            price = quantity * 1.55;
        }
    }
    console.log(price);  
}
solve(['coffee','Varna','10']);