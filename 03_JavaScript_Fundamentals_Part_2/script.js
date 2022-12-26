'use strict';
// <------------------------------Strict Mode
/*
'use strict';

let hasDriverLicense = false;
const passTest = true;

if (passTest) haseDriverLicense = true; //instead of use previous var it creates new global variable if not in strict mode
if (hasDriverLicense) console.log("I can drive ^^");*/

// <------------------------------Functions

function logger(){
    console.log('My name is Aston');
}
//calling / running / invoking
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juise = `Juice with ${apples} apples and ${oranges} oranges`;
    return juise
}

let appleJuise = fruitProcessor(5, 0);
console.log(appleJuise);

const appleOrangeJuise = fruitProcessor(2 ,6);
console.log(appleOrangeJuise());