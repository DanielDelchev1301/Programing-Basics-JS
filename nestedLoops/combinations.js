function combinations(input) {
    let num = Number(input[0]);
    let validCombinationsCount = 0;
    
    for (let n1 = 0; n1 <= num; n1++) {
        for (let n2 = 0; n2 <= num; n2++) {
            for (let n3 = 0; n3 <= num; n3++) {
                if (n1 + n2 + n3 === num) {
                    validCombinationsCount++;
                }
            }
        }
    }
    console.log(validCombinationsCount);
}
combinations(['25']);