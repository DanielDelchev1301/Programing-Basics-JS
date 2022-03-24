function accountBalance(input) {
    let index = 0;
    let add = input[index];
    let total = 0;
    while (add !== 'NoMoreMoney') {
        if (add < 0){
            console.log('Invalid operation!');
            break;
        }
        let increase = Number(add);
        console.log(`Increase: ${increase.toFixed(2)}`);
        total += increase;
        index++;
        add = input[index];
    }
    console.log(`Total: ${total.toFixed(2)}`);
}
accountBalance(["120","45.55","-150"]);