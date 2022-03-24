function evenPowersOf2(input) {
    let n = Number(input[0]);

    for (let num = 0; num <= n; num += 2) {
        let res = Math.pow(2,num);
        console.log(res);
    }
}
evenPowersOf2(['3']);