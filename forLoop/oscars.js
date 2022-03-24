function oscars(input) {
    let index = 0;
    let nameOfTheActor = input[index];
    index++;
    let pointsFromAcademy = Number(input[index]);
    index++;
    let numberOfEvaluators = Number(input[index]);
    index++;
    let isNominee = false;

    for (let i = 0; i < numberOfEvaluators; i++) {
        let nameOfEvaluator = input[index];
        index++;
        let pointByEvaluator = Number(input[index]);
        index++;
        
        pointsFromAcademy += nameOfEvaluator.length * pointByEvaluator / 2;
        if (pointsFromAcademy > 1250.5) {
            console.log(`Congratulations, ${nameOfTheActor} got a nominee for leading role with ${pointsFromAcademy.toFixed(1)}!`);
            isNominee = true;
            break;
        } 
    }
    if (!isNominee) {
        let neededPoints = 1250.5 - pointsFromAcademy;
        console.log(`Sorry, ${a=nameOfTheActor} you need ${neededPoints.toFixed(1)} more!`);
    }
}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"]);