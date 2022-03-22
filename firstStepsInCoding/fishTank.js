function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let heigth = Number(input[2]);
    let percent = Number(input[3]);

    let volumeOfFishTank = length * width * heigth;
    let volumeInLiters = volumeOfFishTank / 1000;
    let occupiedSpace = percent / 100;
    let neededLiters = (volumeInLiters - volumeInLiters * occupiedSpace);
    console.log(neededLiters);
}
fishTank(['85','75','47','17']);