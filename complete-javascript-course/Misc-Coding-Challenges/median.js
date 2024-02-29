"use strict";

// get median number
const arr = [1, 3, 5, 2, 0];
const arr2 = [2, 4, 5, 2, [2, 3, 6, 8]];

console.log(arr.sort());
console.log(arr);

const median = Math.round(arr.length / 2);
console.log(arr[median - 1]);

console.log(arr2.flat(2));

// create and initialize a 100 element array with zeros
const arrayWithZeros = new Array(100).fill(0);

// lone integer
function isEven(number) {
  return number % 2 === 0;
}

function isOdd(number) {
  return !isEven(number);
}

function lonelyinteger(a) {
  // Write your code here
  // create a function to count and return the number of occurences for an input number
  const occurences = function (element) {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] === element) count++;
    }
    console.log(`count = ${count}`);
    return count;
  };
  // create a loop to loop through each number in the array and count occurenaces
  let occurCnt = 0;
  for (let j = 0; j < a.length; j++) {
    occurCnt = occurences(a[j]);
    console.log(`occurCnt = ${occurCnt}`);
    if (occurCnt === 1) return a[j];
  }
  // if an element occurs only once, return it immediately
}

console.log(lonelyinteger([1, 2, 3, 4, 3, 2, 1]));

const arr2d = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];
console.log(arr2d[0][0]);
console.log(arr2d[2][2]);
console.log(arr2d.length);
console.log(arr2d[0].length);
console.log(arr2d[0].reverse());
console.log(Math.max(arr2d[0]));

function diagonalDifference(arr) {
  // Write your code here

  // sum up the l-r diagonal
  // starting a left-most column, capture element, move ot next row and one column over
  const arrSize = arr.length;
  let lrSum = 0;
  for (let i = 0; i < arrSize; i++) {
    // for each row
    lrSum += arr[i][i];
  }
  console.log(`lrSum = ${lrSum}`);

  // sum up the r-l diagonal
  let rlSum = 0;
  for (let i = 0, j = arrSize - 1; i < arrSize; i++, j--) {
    rlSum += arr[i][j];
  }
  console.log(`rlSum = ${rlSum}`);
  // return the abs(sum difference)
  return Math.abs(lrSum - rlSum);
}

console.log(diagonalDifference(arr2d));

/*
 * Complete the 'flippingMatrix' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 */

function flippingMatrix(matrix) {
  // Write your code here
  const quad = matrix.length / 2;

  const arrReverseRow = function (arr) {
    return arr.reverse();
  };
  const arrReverseCol = function () {};

  // find max value in row 0, flip if last element
  for (let i = 0; i < quad; i++) {
    if (matrix[i][0] < matrix[i][matrix.length - 1])
      matrix[i] = arrReverseRow(matrix[i]);
  }

  console.log(matrix);

  for (let i = 0; i < quad; i++) {
    if (matrix[0][i] < matrix[matrix.length - 1][i]) {
      const colReversed = [];
      for (let j = 0; j < matrix.length; j++) {
        colReversed.push(matrix[j][i]);
      }
      colReversed.reverse();
      for (let j = 0; j < matrix.length; j++) {
        matrix[j][i] = colReversed[j];
      }
    }
  }
  console.log(matrix);

  // find max value in row 1, flip if last element

  // find max value in col 0, flip if last element

  // find max value in col 1, flip if last element

  // return the sum of the upper quadrant

  let sum = 0;
  for (let i = 0; i < quad; i++) {
    for (let j = 0; j < quad; j++) {
      sum += matrix[i][j];
    }
  }

  return sum;
}

const flip = [
  [132, 32, 45, 199],
  [1, 45, 78, 200],
  [23, 45, 56, 108],
  [43, 56, 78, 100],
];

const quad = flip.length / 2;
let sum = 0;
for (let i = 0; i < quad; i++) {
  for (let j = 0; j < quad; j++) {
    sum += flip[i][j];
  }
}
console.log(`starting sum = ${sum}`);
console.log(`maximum quadrant sum = ${flippingMatrix(flip)}`);
