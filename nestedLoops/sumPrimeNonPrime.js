function sumPrimeNonPrime(input) {
    let sumPrimeNum = 0;
    let sumNonPrimeNum = 0;
    let index = 0;
    let current = input[index];
    index++;

    while (current !== 'stop') {
        let num = Number(current);
        if (num < 0) {
            console.log('Number is negative.');
            current = input[index];
            index++;
            continue;
        }
        if (num === 1) {
            sumPrimeNum += num;
            current = input[index];
            index++;
            continue;
        }
        let isPrime = true;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
            }
        }
        if (isPrime) {
            sumPrimeNum += num;
        } else {
            sumNonPrimeNum += num;
        }
        current = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${sumPrimeNum}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrimeNum}`);
}
sumPrimeNonPrime(["3",
"9",
"0",
"7",
"19",
"4",
"stop"]);