function luckyNumbers (input) {
    let num = Number(input[0]);
    let printInLine = '';

    for (let u = 1; u <= 9; u++) {
        for (let i = 1; i <= 9; i++) {
            for (let o = 1; o <= 9; o++) {
                for (let p = 1; p <= 9; p++) {
                    if (u + i === o + p && num % (u + i) === 0) {
                        printInLine += `${u}${i}${o}${p} `;
                    }
                }
            }
        }
    }
    console.log(printInLine);
}
luckyNumbers(['3']);