function tennisRanklist(input) {
    let index = 0;
    let tournaments = Number(input[index]);
    index++;
    let startPoints = Number(input[index]);
    index++;

    let totalPoints = 0;
    let winner = 0;

    for (let i = 0; i < tournaments; i++) {
        let position = input[index];
        index++;
        switch (position) {
            case 'W': totalPoints += 2000; winner++; break;
            case 'F': totalPoints += 1200; break;
            case 'SF': totalPoints += 720; break; 
        }
    }
    let finalPoints = totalPoints + startPoints;
    let averagePoints = totalPoints / tournaments;
    let perCentWinner = (winner / tournaments) * 100;

    console.log(`Final points: ${Math.floor(finalPoints)}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(perCentWinner.toFixed(2) + '%');
}
tennisRanklist(['5','1400','F','SF','W','W','SF']);