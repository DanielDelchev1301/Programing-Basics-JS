function depositCalculator(input) {
    let depositedAmount = Number(input[0]);
    let termDeposit = Number(input[1]);
    let annualInterestRate = Number(input[2]);
    let interestForOneYear = depositedAmount * (annualInterestRate / 100);
    let interestForOneMonth = interestForOneYear / 12;
    let final = depositedAmount + termDeposit * interestForOneMonth;
    console.log(final);
}
depositCalculator(['2700','12','38.5']);