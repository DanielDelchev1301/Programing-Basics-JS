function oldBooks(input) {
    let index = 0;
    let nameOfBook = input[index];
    index++;
    let currentBook = input[index];
    let countedBooks = 0;

    while (nameOfBook !== currentBook) {
        index++;
        if (currentBook === 'No More Books') {
            console.log('The book you search is not here!');
            console.log(`You checked ${countedBooks} books.`);
            break;
        }
        countedBooks++;
        currentBook = input[index];
    }
    if (nameOfBook === currentBook) {
        console.log(`You checked ${countedBooks} books and found it.`);
    }
}
oldBooks(["The Spot","Hunger Games","Harry Potter","Torronto","Spotify","No More Books"]);