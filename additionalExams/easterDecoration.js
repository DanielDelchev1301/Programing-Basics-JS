function easterDecoration(input) {
    let client = Number(input[0]);
    let index = 1;
    let current = input[index];
    index++;
    let sum = 0;
    let purchesCounter = 0;
    let avrBill = 0;

    for (let i = 1; i <= client; i++) {
        while (current !== 'Finish') {
            let type = current;
            purchesCounter++;
            switch(type) {
                case 'basket': sum += 1.5; break;
                case 'wreath': sum += 3.8; break;
                case 'chocolate bunny': sum += 7; break; 
            }
            current = input[index];
            index++;
        }
        current = input[index];
        index++;
        if (purchesCounter % 2 === 0) {
            sum *= 0.8;
        }
        avrBill += sum;
        console.log(`You purchased ${purchesCounter} items for ${sum.toFixed(2)} leva.`);
        sum = 0;
        purchesCounter = 0;
    }
    console.log(`Average bill per client is: ${(avrBill / client).toFixed(2)} leva.`);
    
}
easterDecoration(['1','basket','wreath','chocolate bunny'
,'wreath','basket','chocolate bunny','Finish']);