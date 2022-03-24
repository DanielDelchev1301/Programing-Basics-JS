function sumOfTwoNumbers(input) {
    let startRange = Number(input[0]);
    let endRange = Number(input[1]);
    let targetNumber = Number(input[2]);
    let combinations = 0;
    let isFound = false;

    for (let n1 = startRange; n1 <= endRange; n1++) {
        for (let n2 = startRange; n2 <= endRange; n2++) {
            combinations++;
            if (n1 + n2 === targetNumber) {
                console.log(`Combination N:${combinations} (${n1} + ${n2} = ${targetNumber})`);
                isFound = true;
                break;
            }
        }
        if (isFound === true) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${combinations} combinations - neither equals ${targetNumber}`);
    }
}
sumOfTwoNumbers(['1','10','5']);