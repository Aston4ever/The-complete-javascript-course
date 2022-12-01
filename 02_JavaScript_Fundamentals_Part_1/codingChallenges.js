(function (){
    let johnMass = 92;
    let johnHeight = 1.95;
    let markMass = 78;
    let markHeight = 1.69;

    let markBMI = markMass / markHeight**2;
    let johnBMI = johnMass / (johnHeight*johnHeight);

    let isMarkHigherBMI = markBMI > johnBMI;

    console.log(isMarkHigherBMI)
})()
