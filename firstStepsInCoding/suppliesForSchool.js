function suppliesForSchool(input) {
    let packagePens = 5.8;
    let packageMarkers = 7.2;
    let preparation = 1.2;

    let numberPackagePens = Number(input[0]);
    let numberPackageMarkers = Number(input[1]);
    let litresOfPreparation = Number(input[2]);
    let percentDiscount = Number(input[3]);
    let discount = percentDiscount / 100;

    let costForPens = packagePens * numberPackagePens;
    let costForMarkers = packageMarkers * numberPackageMarkers;
    let costForPreparation = preparation * litresOfPreparation;
    let costForEverything = costForMarkers + costForPens + costForPreparation;
    let costWithDiscount = costForEverything - costForEverything * discount;
    console.log(costWithDiscount);
}
suppliesForSchool(['2','3','4','25']);