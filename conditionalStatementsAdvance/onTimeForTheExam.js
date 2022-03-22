function onTimeForTheExam(input) {
    let hourExam = Number(input[0]);
    let minuteExam = Number(input[1]);
    let hourArrival = Number(input[2]);
    let minuteArrival = Number(input[3]);

    let totalMinutesExam = (hourExam * 60) + minuteExam;
    let totalMinutesArrival = (hourArrival * 60) + minuteArrival;

    let mm = 0;
    let hh = 0;
    let time = 0;

    if (totalMinutesArrival > totalMinutesExam) {
        if ((totalMinutesArrival - totalMinutesExam) < 60) {
            mm = totalMinutesArrival - totalMinutesExam;
                console.log('Late');
                console.log(`${mm} minutes after the start`);
        } else {
            time = totalMinutesArrival - totalMinutesExam;
            mm = time % 60;
            hh = Math.floor(time / 60);
            if (mm < 10) {
                console.log('Late');
                console.log(`${hh}:0${mm} hours after the start`);
            } else {
                console.log('Late');
                console.log(`${hh}:${mm} hours after the start`);
            }
        }
    } else if (totalMinutesExam === totalMinutesArrival) {
        console.log('On time');
    } else if (totalMinutesArrival < totalMinutesExam) {
        if ((totalMinutesExam - totalMinutesArrival) <= 30) {
            mm = totalMinutesExam - totalMinutesArrival;
                console.log('On time');
                console.log(`${mm} minutes before the start`);
        } else if ((totalMinutesExam - totalMinutesArrival) > 30 && (totalMinutesExam - totalMinutesArrival) < 60) {
            mm = totalMinutesExam - totalMinutesArrival;
                console.log('Early');
                console.log(`${mm} minutes before the start`);
        } else {
            time = totalMinutesExam - totalMinutesArrival;
            mm = time % 60;
            hh = Math.floor(time / 60);
            if (mm < 10) {
                console.log('Early');
                console.log(`${hh}:0${mm} hours before the start`);
            } else {
                console.log('Early');
                console.log(`${hh}:${mm} hours before the start`);
            }
        }
    }
}
onTimeForTheExam(['10','00','10','00']);