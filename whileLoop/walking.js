function walking(input) {
    let index = 0;
    let goal = 10000;
    let current = input[index];
    index++;

    let totalSteps = 0;
    while (current !== 'Going home') {
        let steps = Number(current);
        totalSteps += steps;

        if (totalSteps >= goal) {
            let diff = Math.abs(totalSteps - goal);
            console.log('Goal reached! Good job!');
            console.log(`${diff} steps over the goal!`);
            break;
        }
        current = input[index];
        index++;
    }
    if (current === 'Going home') {
        let steps = Number(input[index]);
        index++;
        totalSteps += steps;
        let diff = Math.abs(totalSteps - goal);
        if (totalSteps >= goal) {
            console.log('Goal reached! Good job!');
            console.log(`${diff} steps over the goal!`);
        } else {
            console.log(`${diff} more steps to reach goal.`)
        }
    }
}
walking(["1500","3000","250","1548","2000","Going home","2000"]);