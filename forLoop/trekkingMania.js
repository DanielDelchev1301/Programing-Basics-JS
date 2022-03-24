function trekkingMania(input) {
    let index = 0;
    let numberOfGroups = Number(input[index]);
    index++;

    let musala = 0;
    let monblan = 0;
    let kilimandzharo = 0;
    let k2 = 0;
    let everest = 0;
    
    for (let i = 0; i < numberOfGroups; i++) {
        let peoplesInEachGroup = Number(input[index]);
        index++;
        if (peoplesInEachGroup <= 5) {
            musala += peoplesInEachGroup;
        } else if (peoplesInEachGroup >= 6 && peoplesInEachGroup <= 12) {
            monblan += peoplesInEachGroup;
        } else if (peoplesInEachGroup >= 13 && peoplesInEachGroup <= 25) {
            kilimandzharo += peoplesInEachGroup;
        } else if (peoplesInEachGroup >= 26 && peoplesInEachGroup <= 40) {
            k2 += peoplesInEachGroup;
        } else {
            everest += peoplesInEachGroup;
        }
    }

    let allPeople = musala + monblan + kilimandzharo + k2 + everest;

    let musalaPerCent = musala / allPeople * 100;
    let monblanPerCent = monblan / allPeople * 100;
    let kiliPerCent = kilimandzharo / allPeople * 100;
    let k2PerCent = k2 / allPeople * 100;
    let everestPerCent = everest / allPeople * 100;

    console.log(musalaPerCent.toFixed(2) + '%');
    console.log(monblanPerCent.toFixed(2) + '%');
    console.log(kiliPerCent.toFixed(2) + '%');
    console.log(k2PerCent.toFixed(2) + '%');
    console.log(everestPerCent.toFixed(2) + '%');
}
trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])
