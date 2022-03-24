function cake(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let pieces = width * length;
    let index = 2;
    let current = input[index];
    let piecesForGuests = 0;
        while (current !== 'STOP') {
            let cakePieces = Number(current);
            piecesForGuests += cakePieces;
            index++;
            if (pieces < piecesForGuests) {
                let diff = Math.abs(pieces - piecesForGuests);
                console.log(`No more cake left! You need ${diff} pieces more.`);
                break;
            }
            current = input[index];
        }

        if (current === 'STOP') {
            let diff = Math.abs(pieces - piecesForGuests);
            console.log(`${diff} pieces are left.`);
        }
}
cake(["10","2","2","4","6","STOP"]);