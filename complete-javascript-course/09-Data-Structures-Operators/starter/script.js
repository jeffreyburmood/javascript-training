'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//
// strings
//
const airline = 'US Airways';
let plane = '747';

console.log(plane[0]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('A'));
console.log(airline.lastIndexOf('s'));
console.log(airline.indexOf('US'));

// slice - extract -> slice(start, end)
console.log(airline.slice(3));
console.log(airline.slice(3, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// slice - extract from the end
console.log(airline.slice(-2));
console.log(airline.slice(-8));

// check the middle seat in the airplane - B & E are middle seats
const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got a middle seat');
  else console.log('You got lucky!');
};

checkMiddleSeat('33B');
checkMiddleSeat('11A');
checkMiddleSeat('20E');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// fix capitalization in a name
const passenger = 'jEffRey';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passenger[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// fix email
const email = '  BroKen@mail.com  \n ';
const normalizedEmail = email.toLowerCase().trim();
console.log(normalizedEmail);

// replace parts of strings
const priceGB = '288,97#';
const priceUS = priceGB.replace('#', '$').replace(',', '.');
console.log(priceGB, priceUS);

const announcement =
  ' All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
// regex
console.log(announcement.replace(/door/g, 'gate'));

// returns booleans
plane = 'A32neo';
console.log(plane.includes('A32'));
console.log(plane.includes('B32'));
console.log(plane.startsWith('A32') && plane.endsWith('neo'));

const dayTime = '01:01:00PM';
const nightTime = '12:01:00PM';

const ampm = dayTime.slice(-2);
let hours = parseInt(dayTime.slice(0, 2));
console.log(hours);
let newHours = '';
if (ampm === 'PM') {
  if (hours === 12) newHours = '12';
  else newHours = hours + 12;
} else {
  if (hours === 12) newHours = '00';
  else newHours = dayTime.slice(0, 2);
}

const milTime = newHours + dayTime.substring(2, 8);

console.log(milTime);
