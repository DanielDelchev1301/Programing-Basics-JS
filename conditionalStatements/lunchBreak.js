function lunchBreak(input) {
    let nameOfSerial = input[0];
    let episodeDuration = Number(input[1]);
    let durationOfRest = Number(input[2]);
    
    let timeForLunch = durationOfRest * (1 / 8);
    let timeForLeisure = durationOfRest * (1 / 4);
    let timeLeft = durationOfRest - timeForLeisure - timeForLunch;
    if (timeLeft >= episodeDuration) {
        let freeTime = timeLeft - episodeDuration;
        console.log(`You have enough time to watch ${nameOfSerial} and left with ${Math.ceil(freeTime)} minutes free time.`);
    } else {
        let neededTime = episodeDuration - timeLeft;
        console.log(`You don't have enough time to watch ${nameOfSerial}, you need ${Math.ceil(neededTime)} more minutes.`);
    }
}
lunchBreak(['Game of Thrones','48','60']);