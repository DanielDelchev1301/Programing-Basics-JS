function examPreparation(input) {
    let maxPoorGrades = Number(input[0]);
    let index = 1;
    let sumOfGrades = 0;
    let grades = 0;
    let numberOfProblems = 0;
    let sumOfPoorGrades = 0;
    let lastProblem = '';

    while (sumOfPoorGrades < maxPoorGrades) {
        let nameOfProblem = input[index];
        index++
        let currentGrade = Number(input[index]);
        index++;
        if (nameOfProblem === 'Enough') {
            let averageGrade = sumOfGrades / grades;
            console.log(`Average score: ${averageGrade.toFixed(2)}`);
            console.log(`Number of problems: ${numberOfProblems}`);
            console.log(`Last problem: ${lastProblem}`);
            break;
        }
        numberOfProblems++;
        sumOfGrades += currentGrade;
        grades++;
        if (currentGrade <= 4) {
            sumOfPoorGrades++;
        }
        lastProblem = nameOfProblem;
    }
    if (sumOfPoorGrades === maxPoorGrades) {
        console.log(`You need a break, ${sumOfPoorGrades} poor grades.`);
    }
}
examPreparation(["3","Money","6","Story","4","Spring Time","5","Bus","6","Enough"]);