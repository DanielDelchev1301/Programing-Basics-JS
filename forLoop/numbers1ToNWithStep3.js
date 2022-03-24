function numbers1ToNWithStep3(input) {
    let n = Number(input[0]);
    for (let num = 1; num <= n; num += 3) {
        console.log(num);
    }
}
numbers1ToNWithStep3(['10']);