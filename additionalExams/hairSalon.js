function hairSalon(input) {
    let target = Number(input[0]);
    let index = 1;
    let current = input[index];
    index++;
    let money = 0;

    while (current !== 'closed') {
        let service = current;
        current = input[index];
        index++;
        if (service === 'haircut') {
            switch(current) {
                case 'mens': money += 15; break;
                case 'ladies': money += 20; break;
                case 'kids': money += 10; break;
            }
        } else if (service === 'color') {
            switch(current) {
                case 'touch up': money += 20; break;
                case 'full color': money += 30; break;
            }
        }
        if (money >= target) {
            console.log('You have reached your target for the day!');
            console.log(`Earned money: ${money}lv.`);
            break;
        }
    }
    if (money < target) {
        let diff = target - money;
        console.log(`Target not reached! You need ${diff}lv. more.`);
        console.log(`Earned money: ${money}lv.`);
    }
}
hairSalon(["50",
"color",
"full color",
"haircut",
"ladies"]);