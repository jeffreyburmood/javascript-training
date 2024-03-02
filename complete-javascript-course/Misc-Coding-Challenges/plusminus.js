'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here

    // set up arrays
    let posCnt = 0;;
    let negCnt = 0;
    let zeroCnt = 0;;
    const totalNums = arr.length;

    // process input and perform analysis
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) posCnt++;
        else if (arr[i] < 0) negCnt++;
        else zeroCnt++;
    }

    // calculate and print ratios with the proper precision
    console.log(parseFloat(posCnt / totalNums).toPrecision(6));
    console.log(parseFloat(negCnt / totalNums).toPrecision(6));
    console.log(parseFloat(zeroCnt / totalNums).toPrecision(6));

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}