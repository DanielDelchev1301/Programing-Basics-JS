function multiplyTable(input) {
    let num = input[0];
    let numA = Number(num.charAt(0));
    let numB = Number(num.charAt(1));
    let numC = Number(num.charAt(2));

    for (let i = 1; i <= numC; i++) {
        if (numC > 0) {
            for (let o = 1; o <= numB; o++) {
                if (numB > 0) {
                    for (let p = 1; p <= numA; p++) {
                        if (numA > 0) {
                            let res = i * o * p;
                            console.log(`${i} * ${o} * ${p} = ${res};`);
                        }
                    }
                }
            }
        }
    }
}
multiplyTable(['324']);