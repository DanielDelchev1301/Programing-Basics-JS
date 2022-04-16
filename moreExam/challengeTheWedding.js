function challeengeTheWedding(input) {
    let men = Number(input[0]);
    let women = Number(input[1]);
    let maxTables = Number(input[2]);
    let counter = 0;
    let printInLine = '';

    for (let a = 1; a <= men; a++) {
        for (let b = 1; b <= women; b++) {
            if (counter === maxTables) {
                break;
            }
            printInLine += `(${a} <-> ${b}) `;
            counter++;
        }
    }
    console.log(printInLine);
}
challeengeTheWedding(['2','2','3']);