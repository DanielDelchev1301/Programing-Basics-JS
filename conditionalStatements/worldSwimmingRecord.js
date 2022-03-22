function worldSwimmingRecord(input) {

    let record = Number(input[0]);
    let distance = Number(input[1]);
    let timePerOneMeter = Number(input[2]);
    
    let timeForSwim = distance * timePerOneMeter;
    let slow = (Math.floor(distance / 15)) * 12.5;
    let totalTime = timeForSwim + slow;
    
    if (record <= totalTime) {
        let slower = totalTime - record;
        console.log(`No, he failed! He was ${slower.toFixed(2)} seconds slower.`);
    } else if (record > totalTime) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }
}
worldSwimmingRecord(['55555.67','3017','5.03']);