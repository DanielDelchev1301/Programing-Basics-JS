function operationsBetweenNumbers(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let symbol = input[2];
    let result = 0;
    let evenOdd;

    switch(symbol) {
        case '+':
            result = firstNum + secondNum;
            if (result % 2 === 0) {
                evenOdd = 'even';
            } else {
                evenOdd = 'odd';
            }
        console.log(`${firstNum} ${symbol} ${secondNum} = ${result} - ${evenOdd}`);
        break;
        case '-':
            result = firstNum - secondNum;
            if (result % 2 === 0) {
                evenOdd = 'even';
            } else {
                evenOdd = 'odd';
            }
        console.log(`${firstNum} ${symbol} ${secondNum} = ${result} - ${evenOdd}`);
        break;
        case '*':
            result = firstNum * secondNum;
            if (result % 2 === 0) {
                evenOdd = 'even';
            } else {
                evenOdd = 'odd';
            }
        console.log(`${firstNum} ${symbol} ${secondNum} = ${result} - ${evenOdd}`);
        break;
        case '/':
            if (secondNum === 0) {
                console.log(`Cannot divide ${firstNum} by zero`);
            } else {
                result = firstNum / secondNum;
                console.log(`${firstNum} / ${secondNum} = ${result.toFixed(2)}`);
            }
        break;
        case '%':
            if (secondNum === 0) {
                console.log(`Cannot divide ${firstNum} by zero`);
            } else {
                result = firstNum % secondNum;
                console.log(`${firstNum} % ${secondNum} = ${result}`);
            }
    }
}
operationsBetweenNumbers(['10','0','%']);