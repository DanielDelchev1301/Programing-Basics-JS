function uniquePINCodes(input) {
    let numA = Number(input[0]);
    let numB = Number(input[1]);
    let numC = Number(input[2]);
    
    for (let i = 1; i <= numA; i++) {
        if (i % 2 === 0){
            for (let o = 1; o <= numB; o++) {
                if (o === 2 || o === 3 || o === 5 || o === 7) {
                    for (let p = 1; p <= numC; p++) {
                        if (p % 2 === 0) {
                            console.log(i + ' ' + o + ' ' + p);
                        }
                    }
                }
            }
        }
    }
}
uniquePINCodes(['8','2','8']);