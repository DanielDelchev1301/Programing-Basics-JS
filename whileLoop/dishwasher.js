function dishwasher(input) {
    let bottlesDetergent = Number(input[0]);
    let detergent = bottlesDetergent * 750;
    let index = 1;
    let current = input[index];
    let inARow = 0;
    let plates = 0;
    let saucepan = 0;
    let usedDetergent = 0;

    while (current !== 'End') {
        let dishes = Number(current);
        inARow++;
        if (inARow >= 3) {
            saucepan+= dishes;
            let usedDetergentForSaucepan = saucepan * 15;
            usedDetergent += usedDetergentForSaucepan;
            inARow = 0;
        } else {
            plates += dishes;
            let usedDetergentForPlates = plates * 5;
            usedDetergent += usedDetergentForPlates;
        }
        if (usedDetergent > detergent) {
            let diff = Math.abs(usedDetergent - detergent);
            console.log(`Not enough detergent, ${diff} ml. more necessary!`);
            break;
        }
        index++;
        current = input[index];
    }
    if (current === 'End') {
        let diff = Math.abs(detergent - usedDetergent);
        console.log('Detergent was enough!');
        console.log(`${plates} dishes and ${saucepan} pots were washed.`);
        console.log(`Leftover detergent ${diff} ml.`);
    }
}
dishwasher(['2','53','65','55','End']);