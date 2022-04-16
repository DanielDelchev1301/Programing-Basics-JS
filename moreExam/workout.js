function workout(input) {
    let days = Number(input[0]);
    let firstDayKm = Number(input[1]);
    let tempKm = 0;
    let totalKm = firstDayKm;
    let index = 2;

    for (let i = 1; i <= days; i++) {
        let perCent = Number(input[index]);
        index++;
        let pC = 1 + (perCent / 100);
        tempKm = firstDayKm * pC;
        totalKm += tempKm;
        if (true) {
            firstDayKm = tempKm;
        }
    }
    if (totalKm >= 1000) {
        let diff = totalKm - 1000;
        console.log(`You've done a great job running ${Math.ceil(diff)} more kilometers!`);
    } else {
        let diff = 1000 - totalKm;
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(diff)} more kilometers`);
    }
}
workout(["5",
"30",
"10",
"15",
"20",
"5",
"12"]);