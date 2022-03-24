function trainTheTrainers(input) {
    let index = 0;
    let people = Number(input[index]);
    index++;
    let current = input[index];
    index++;

    let sumGrade = 0;
    let counter = 0;
    while (current !== 'Finish') {
        let name = current;
        let tempsumGrade = 0;
        counter++;
        for (let i = 0; i < people; i++) {
            let temporaryGrade = Number(input[index]);
            index++;
            tempsumGrade += temporaryGrade;
        }
        let tempAvrGrade = tempsumGrade / people;
        sumGrade += tempAvrGrade;
        console.log(`${name} - ${tempAvrGrade.toFixed(2)}.`);
        current = input[index];
        index++;
    }

    let averageGrade = sumGrade / counter;
    console.log(`Student's final assessment is ${averageGrade.toFixed(2)}.`);
}
trainTheTrainers(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"]);