function minNumber(input) {
    let index = 0;
    let currentElement = input[index];
    index++;
    let min = Number.MAX_SAFE_INTEGER;

    while (currentElement !== 'Stop') {
        let num = Number(currentElement);
        if (num < min) {
            min = num;
        }
        currentElement = input[index];
        index++;
    }
    console.log(min);
}
minNumber(['100','99','80','70','Stop']);