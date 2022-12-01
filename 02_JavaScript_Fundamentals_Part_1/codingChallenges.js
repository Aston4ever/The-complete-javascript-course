// <------------------------------Challenge #1
(function () {
    let johnMass = 92;
    let johnHeight = 1.95;
    let markMass = 78;
    let markHeight = 1.69;

    let markBMI = markMass / markHeight ** 2;
    let johnBMI = johnMass / (johnHeight * johnHeight);

    let isMarkHigherBMI = markBMI > johnBMI;

    console.log(isMarkHigherBMI)
})();

// <------------------------------Challenge #2
(function () {
    let johnMass = 92;
    let johnHeight = 1.95;
    let markMass = 78;
    let markHeight = 1.69;

    let markBMI = markMass / markHeight ** 2;
    let johnBMI = johnMass / (johnHeight * johnHeight);

    if (markBMI > johnBMI) {
        console.log(`Mark's BMI(${markBMI}) is higher than John's(${johnBMI})!`)
    } else {
        console.log(`John's BMI(${johnBMI}) is higher than Mark's(${markBMI})!`)
    }
})();
