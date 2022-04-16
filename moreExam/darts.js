function darts(input) {
    let name = input[0];
    let index = 1;
    let current = input[index];
    index++;
    let gamePoints = 301;
    let successful = 0;
    let unsuccessful =0;

    while (current !== 'Retire') {
        let points = Number(input[index]);
        index++;
        switch(current) {
            case 'Single': points;
                if (gamePoints < points) {
                    unsuccessful++;
                } else {
                    gamePoints -= points;
                    successful++;
                }
            break;
            case 'Double': points *= 2; 
                if (gamePoints < points) {
                    unsuccessful++;
                } else {
                    gamePoints -= points;
                    successful++;
                }
            break;
            case 'Triple': points *= 3; 
                if (gamePoints < points) {
                    unsuccessful++;
                } else {
                    gamePoints -= points;
                    successful++;
                }
            break;
        }
        if (gamePoints === 0) {
            console.log(`${name} won the leg with ${successful} shots.`);
            break;
        }
        current = input[index];
        index++;
    }
    if (current === 'Retire') {
        console.log(`${name} retired after ${unsuccessful} unsuccessful shots.`);
    }
}
darts(['Stephen Bunting','Triple','20','Triple'
,'20','Triple','20','Retire','20','Triple','20','Triple'
,'20','Double','7','Single','12','Double','1','Single','1']);