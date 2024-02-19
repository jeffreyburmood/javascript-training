/*
let js = 'amazing';

console.log(43 + 23 - 80 + 100);

let firstName = 'Jeffrey'
console.log(firstName)

let javascriptIsFun = false;
console.log(javascriptIsFun);

// console.log(typeof (true));
console.log(typeof (23));
console.log(typeof ('myString'));

// dynamic typing
javascriptIsFun = "Yes!";
console.log(typeof (javascriptIsFun));

// undefined
let noDef;
console.log(noDef);
console.log(typeof (noDef));

noDef = 'def!'
console.log(noDef);
console.log(typeof (noDef));

// null
let nullDef = null;
console.log(nullDef);
console.log(typeof (nullDef));

*/

//  declaring variables
let age = 30;
age = 31;

const birthYear = 1960;
// birthYear = 2024 NOT LEGAL, READONLY!
// const birthYear  NOT LEGAL, REQUIRES VALUE

// var keyword - never use
var oldWay = 'priorToES6';

//  operators

const currentYear = 2024
const ageJeff = currentYear - 1960;
const agePat = currentYear - 1958;
console.log(ageJeff, agePat);

console.log(ageJeff * 2, ageJeff / 10, ageJeff ** 2);

// assignments
let x = 10 * 10;
x += 10; // x = x + 10
x *= 4;
x++; // x = x+1
x--; // x = x-1

// comparison operators
console.log(ageJeff < agePat); // <, >=, <= 
console.log(typeof (ageJeff >= agePat));

// strings + template literals
const firstName = 'Jeffrey';
const job = 'engineer';
const bYear = 1960;

const jeff = "I'm " + firstName + ', an ' + job;

console.log(jeff);

const jeffNew = `I'm ${firstName}, an ${job}`; // use back tics for template string

console.log(jeffNew);

console.log(`just a string`);

console.log(`String
with multiple
line`);

// 5 falsy values - 0, '', undefined, nullm NaN -> become false when converted to boolean type

// equality operators == (loose) vs === (strict)
age = 20;
if (age === 18) {  // returns true or false basd on whetehr both operators are exactly the same
    console.log(`Is 18!`);
} else if (age !== 19) {
    console.log(`age is not 18 or 19`);
}

if (age == '18') { // performs any required type conversions, avoid this!!!
    console.log(`is loose 18!`);
}

// easy user input
// const favorite = prompt(`What's your favorite number?`);
// console.log(favorite);
// console.log(typeof (favorite));

// logic operators
const hasDriverLicense = true
const hasGoodVision = false

console.log(hasDriverLicense && hasGoodVision)  // AND
console.log(hasDriverLicense || hasGoodVision)  // OR
console.log(!hasDriverLicense) // NOT

// switch statement
const day = 'sunday';

switch (day) {
    case 'monday':
        console.log(`Plan course structure`);
        console.log(`Go to coding meet-up`);
        break;
    case 'tuesday':
    case 'wednesday':
        console.log(`Prepare theory videos`);
        break;
    case 'thursday':
        console.log(`Write code example`);
        break;
    case 'friday':
        console.lof(`Recodr videos`);
        break;
    default:
        console.log(`It's the weekend!!!`);
}

// conditional operator
age = 17;
age >= 18 ? console.log(`I like to drink wine`) : console.log(`I like to drink water`);
