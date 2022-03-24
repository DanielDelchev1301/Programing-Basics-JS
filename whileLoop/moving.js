function moving(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let heigth = Number(input[2]);
    let index = 3;
    let current = input[index];
    let availableCubicMeters = width * length * heigth;
    let occupiedCubicMeters = 0;

    while (current !== 'Done') {
        let boxes = Number(current);
        occupiedCubicMeters += boxes;
        if (occupiedCubicMeters >= availableCubicMeters) {
            let diff = Math.abs(occupiedCubicMeters - availableCubicMeters);
            console.log(`No more free space! You need ${diff} Cubic meters more.`);
            break;
        }
        index++;
        current = input[index];
    }
    if (current === 'Done') {
        let diff = Math.abs(availableCubicMeters - occupiedCubicMeters);
        console.log(`${diff} Cubic meters left.`);
    }
}
moving(["10", "10","2","20","20","20","20","122"]);