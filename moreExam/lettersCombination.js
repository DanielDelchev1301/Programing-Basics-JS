function lettersCombination(input) {
    let start = input[0].charCodeAt(0);
    let end = input[1].charCodeAt(0);
    let notShow = input[2].charCodeAt(0);
    let printInLine = '';
    let counter = 0;

    for (let i = start; i <= end; i++) {
        if (i !== notShow) {
            for (let o = start; o <= end; o++) {
                if (o !== notShow) {
                    for (let p = start; p <= end; p++) {
                        if (p !== notShow) {
                            printInLine += String.fromCharCode(i,o,p) + ' ';
                            counter++;
                        }
                    }
                }
            }
        }
    }
    console.log(printInLine + counter);
}
lettersCombination(['a','c','b']);