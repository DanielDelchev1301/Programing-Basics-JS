function weddingSeats(input) {
    let start = 'A'.charCodeAt(0);
    let end = input[0].charCodeAt(0);
    let rows = Number(input[1]);
    let seats = Number(input[2]);
    let startSeats = 'a'.charCodeAt(0);
    let endSeats = startSeats + seats;
    let printInLine = '';
    let counter = 0;

    for (let i = start; i <= end; i++) {
        for (let o = 1; o <= rows; o++) {
            if (o % 2 === 0) {
                endSeats += 2;
            } else {
                endSeats = startSeats + seats;
            }
            for (let p = startSeats; p < endSeats; p++) {
                printInLine += String.fromCharCode(i) + o + String.fromCharCode(p);
                console.log(printInLine);
                printInLine = '';
                counter++;
            }
        }
        rows++;
    }
    console.log(counter);
}
weddingSeats(['B','3','2']);