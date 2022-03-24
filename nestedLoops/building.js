function building(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    for (let i = floors; i >= 1; i--) {
        let printInLine = '';
        for (let j = 0; j < rooms; j++) {
            if (i == floors) {
                printInLine += `L${i}${j} `;
            } else if (i % 2 == 0) {
                printInLine += `O${i}${j} `;
            } else {
                printInLine += `A${i}${j} `;
            }
        }
        console.log(printInLine);
    }
}
building(['6','4']);