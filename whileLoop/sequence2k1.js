function sequence2k1(input) {
    let num = Number(input[0]);
    let diff = 1;

    while(diff <= num) {
        console.log(diff);
        diff = diff * 2 + 1;
    }
}
sequence2k1(['8']);