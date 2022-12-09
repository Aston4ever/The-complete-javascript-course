/*
let js = 'amazing';

console.log('Aston');//string
console.log(23)//number

let firstName = 'Anton';
console.log(firstName);
console.log(firstName);
console.log(firstName);

let _anton = 'Anton';
let $Anton = 'Anton';
const PI = 3.1415;
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);
console.log(typeof 'hello')
console.log(typeof 12)

javascriptIsFun = 'Aston';

let hello; //undefined
console.log(typeof  hello);

console.log(typeof null);
*/

// <------------------------------const let var
/*
let age = 14;
age =15;

const birthYear = 1990;
// birthYear = 1991;

var age1 = 19;
*/

// <------------------------------Operators
/*
const now = 2023;
const myAge = now - 1989;
const sarahAge = now - 1996;
console.log(myAge, sarahAge);
console.log(myAge * 2, sarahAge / 2, 2 ** 3);
const firstName = 'Aston';
const lastName = 'Star';

console.log(firstName + ' ' + lastName);
let x = 10 + 5;
x += 10;
x *= 2;
x /= 3;
x -= 2;

x--
x++
--x
++x
console.log(x)

console.log(myAge >= sarahAge);
let isFullAge = sarahAge >= 18;
*/

// <------------------------------ Operator Precedence
/*
const now = 2023;
const myAge = now - 1989;
const sarahAge = now - 1996;

console.log(now - 1991 > now - 2006);
let x, y;
x = y = 10 - 5;
console.log(x, y)
*/

// <------------------------------ Strings
/*
const firstName = 'Aston';
const job = 'developer';
const birthYear = 1989;
const year = 2023;

const me = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job;
console.log(me);

const meNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
console.log(meNew);

console.log(`just a regular string...`);
console.log(`Hello
new
string`);
*/

// <------------------------------If conditions
/*
const age = 15;

if (age >= 18) {
    console.log('Sarah can start driver licence🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. She should wait ${yearsLeft} years`);
}

let centery;
const birthYear = 1991;
if (birthYear <= 2000) {
    centery = 20;
} else {
    centery = 21;
}
console.log(centery);
*/

// <------------------------------Conversion and Coercion
/*
//type conversion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(inputYear + 18);

console.log(Number('Aston')); //NaN
console.log(typeof NaN);// Number
console.log(String(23));// '23'

//type coercion
console.log('I am ' + 33 + ' years old') //coercion
console.log('23' - '10'); // 10
let n = '1' + 1;
n = n + 1;
console.log(n)// 12
*/

// <------------------------------Booleann
/*
// "", 0, NaN, null, undefined
console.log(Boolean(0))
console.log(Boolean('Hello'))
console.log(Boolean(undefined))
console.log(Boolean(NaN))
console.log(Boolean({}))

const money = 0;
if (money) {
    console.log('Dont spend too much')
} else  {
    console.log('Get a job')
}
*/

// <------------------------------Equality operators

/*
const age = "18";
if (age === 18) console.log('You are adult'); //false
if (age == 18) console.log('You are adult'); //true

const favourite = Number(prompt('Enter your age', 23));
console.log(favourite)
console.log(typeof favourite)
if (favourite === 23) {
    console.log("Cool number 23")
} else if (favourite === 7) {
    console.log('7 is good number too')
}

if (favourite !== 23) {
    console.log('Number is not 23')
}
*/

// <------------------------------Logical operators
/*
const hasDriverLicence = true;
const hasGoodVision = false;

console.log(hasDriverLicence && hasGoodVision) // false
console.log(hasDriverLicence || hasGoodVision) // true
console.log(hasDriverLicence || !hasGoodVision) // true

const shouldDrive = hasDriverLicence && hasGoodVision;

if (shouldDrive) {
    console.log("Sarah can drive")
} else console.log('Smb should drive')

const tired = true;
if (shouldDrive && !tired) {
    console.log("Sarah can drive")
} else console.log('Smb should drive')
*/

// <------------------------------Switch case

const day = 'Monday';

switch (day) {
    case 'Monday':
        console.log('Plan course structure');
        break;
    case 'Tuesday':
        console.log('prepare videos');
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log('write code examples');
        break;
    case 'Friday':
        console.log('redord videos');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('enjoy weekend')
        break;
    default:
        console.log('Enter correct day');
}