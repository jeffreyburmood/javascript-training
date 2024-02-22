// strict mode for enhanced security
// avoid accidental errors - provides failure msgs

'use strict';

// functions
function logger() {
    console.log(`This is a log - `);
}

logger();

//  function declaration
function calcAge1(birthYear) {
    return 2024 - birthYear;
}

const age1 = calcAge1(1960);

// function expression
const calcAge2 = function (birthYear) {
    return 2024 - birthYear;
}

const age2 = calcAge2(1960)

//  arrow functions - implicit return only if one-liner
const calcAge3 = birthYear => 2024 - birthYear;

const age3 = calcAge3(1960);

console.log(age1, age2, age3);


const yearsUntilRetirement = birthYear => {
    const age = calcAge3(birthYear);
    const retirement = 67 - age;
    return retirement
}

console.log(yearsUntilRetirement(1960));

const yearsUntilRetirement2 = (birthYear, firstName) => {
    const age = calcAge3(birthYear);
    const retirement = 67 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement2(1960, 'Jeffrey'));

// arrays
const friends = ["micheal", "steven", "peter"];

console.log(friends);
console.log(friends[0]);

friends[2] = 'jay';
console.log(friends);

const years = new Array(1991, 2008, 2020);
console.log(years);
console.log(years.length);

const jeffrey = ['jeffrey', 'smith', '1960', 2024 - 1960, friends]

console.log(jeffrey)

// array operations
friends.push('sandy');
// add elements
const newLength = friends.push('mindy')
console.log(friends, newLength);

friends.unshift('mary');  //move to beginning
console.log(friends)

// remove elements
const popped = friends.pop()
console.log(popped)

friends.shift() // remove first
console.log(friends)

console.log(friends.indexOf('sandy'))

// item in array?
console.log(friends.includes('sandy'))