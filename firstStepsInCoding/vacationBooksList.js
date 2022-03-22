function vacationBookList(input) {
    let numberOfPages = Number(input[0]);
    let pagesReadPerHour = Number(input[1]);
    let daysForReading = Number(input[2]);
    let timeForReadTheBooks = numberOfPages / pagesReadPerHour;
    let hoursPerDay = timeForReadTheBooks / daysForReading;
    console.log(hoursPerDay);
}
vacationBookList(['350','17','5']);