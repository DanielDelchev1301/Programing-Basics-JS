function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let price = 0;

    let workingDays = day == 'Monday' || day == 'Tuesday' || day == 'Wednesday'
    || day == 'Thursday' || day == 'Friday';
    let weekend = day == 'Saturday' || day == 'Sunday';

    if (workingDays) {
        switch(fruit) {
            case 'banana': price = quantity * 2.5; break;
            case 'apple': price = quantity * 1.2; break;
            case 'orange': price = quantity * 0.85; break;
            case 'grapefruit': price = quantity * 1.45; break;
            case 'kiwi': price = quantity * 2.7; break;
            case 'pineapple': price = quantity * 5.5; break;
            case 'grapes': price = quantity * 3.85; break;
            default: console.log('error'); break;
        }
    } else if (weekend) {
        switch(fruit) {
            case 'banana': price = quantity * 2.7; break;
            case 'apple': price = quantity * 1.25; break;
            case 'orange': price = quantity * 0.9; break;
            case 'grapefruit': price = quantity * 1.6; break;
            case 'kiwi': price = quantity * 3; break;
            case 'pineapple': price = quantity * 5.6; break;
            case 'grapes': price = quantity * 4.2; break;
            default: console.log('error'); break;
        }
    } else {
        console.log('error');
    }
    if (price > 0) {
        console.log(price.toFixed(2));
    }
}
fruitShop(['tomato','Monday','0.5']);