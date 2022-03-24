function multiplicationTable(input) {
    for (let num = 1; num <= 10; num++) {
        for (let secondNum = 1; secondNum <= 10; secondNum++) {
            let result = num * secondNum;
            console.log(`${num} * ${secondNum} = ${result}`);
        }
    }
}
multiplicationTable();