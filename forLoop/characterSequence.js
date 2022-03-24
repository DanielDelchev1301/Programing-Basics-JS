function characterSequence(input) {
    let text = input[0];
    for (let character = 0; character < text.length; character++) {
        let letter = text[character];
        console.log(letter);
    }
}
characterSequence(['softuni']);