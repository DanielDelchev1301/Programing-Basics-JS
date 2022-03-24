function traveling(input) {
    let index = 0;
    let destination = input[index];
    index++;
    let minimumBudget = Number(input[index]);
    index++;
    let currentMoney = Number(input[index]);
    index++;
    while (true) {
        if (destination === 'End') {
            break;
        }
        while (currentMoney < minimumBudget) {
            currentMoney += Number(input[index]);
            index++;
            if (currentMoney >= minimumBudget) {
                console.log(`Going to ${destination}!`);
                currentMoney = 0;
                destination = input[index];
                index++;
                minimumBudget = Number(input[index]);
                index++;
            }
        }
    }
}
traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"]);