function cinemaTickets(input) {
    let index = 0;
    let current = input[index];
    index++;
    let studentCount = 0;
    let standartCount = 0;
    let kidCount = 0;
    let totalTicket = 0;

    while (current !== 'Finish') {
        let name = current;
        let freeSpace = Number(input[index]);
        index++;
        let tempCurrent = input[index];
        index++;
        let tempTicket = 0;

        while (tempCurrent !== 'End') {
            tempTicket++;
            switch(tempCurrent) {
                case 'student': studentCount++; break;
                case 'standard': standartCount++; break;
                case 'kid': kidCount++; break;
            }
            if (tempTicket >= freeSpace) {
                break;
            }
            tempCurrent = input[index];
            index++;
        }
        totalTicket += tempTicket;
        let tempEmptySpace = tempTicket / freeSpace * 100;
        console.log(`${name} - ${tempEmptySpace.toFixed(2)}% full.`);
        current = input[index];
        index++;
    }
    console.log(`Total tickets: ${totalTicket}`);
    let studentP = studentCount / totalTicket * 100;
    let standartP = standartCount / totalTicket * 100;
    let kidP = kidCount / totalTicket * 100;
    console.log(`${studentP.toFixed(2)}% student tickets.`);
    console.log(`${standartP.toFixed(2)}% standard tickets.`);
    console.log(`${kidP.toFixed(2)}% kids tickets.`);
}
cinemaTickets(['Taxi',"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"]);