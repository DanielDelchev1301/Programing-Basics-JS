function repainting(input) {
    let safetyFolly = 1.5;
    let paint = 14.5;
    let paintThinner = 5;
    let moneyForBags = 0.4;

    let amountFolly = Number(input[0]);
    let amountPaint = Number(input[1]);
    let amountThinner = Number(input[2]);
    let hoursForWork = Number(input[3]);

    let costForFolly = (amountFolly + 2) * safetyFolly;
    let costForPaint = ((amountPaint * 0.1) + amountPaint) * paint;
    let costForThinner = amountThinner * paintThinner;
    let totalAmountForMaterials = costForFolly + costForPaint + costForThinner + moneyForBags;
    let amountForWorkmans = (totalAmountForMaterials * 0.3) * hoursForWork;
    let totalAmountForEverything = amountForWorkmans + totalAmountForMaterials;
    console.log(totalAmountForEverything);
}
repainting(['10','11','4','8']);