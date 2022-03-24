function maxNumber(input) {
    let index = 0;
    let currentElement = input[index];
    index++;
    let max = Number.MIN_SAFE_INTEGER;

    while (currentElement !== 'Stop') {
        let num = Number(currentElement);
        if (num > max) {
            max = num;
        }
        currentElement = input[index];
        index++;
    }
    console.log(max);
}
maxNumber(['100','99','80','70','Stop']);