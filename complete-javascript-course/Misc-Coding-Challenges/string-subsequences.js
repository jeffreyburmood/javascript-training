" use strict";

const buildIndexArray = function (char, str) {
  // initialize character index arrays
  const indexes = [];

  // build character index array
  let searchStr = str;
  let searchResult = undefined;
  while (true) {
    searchResult = searchStr.indexOf(char);
    if (searchResult === -1) break;
    indexes.push(searchResult);
    searchStr = searchStr.replace(char, "0");
  }

  return indexes;
};

const getSubSequenceCount = function (s1, s2) {
  // build index array for each character in s1
  char1Indexes = buildIndexArray(s1[0], s2);
  char2Indexes = buildIndexArray(s1[1], s2);
  char3Indexes = buildIndexArray(s1[2], s2);

  // parse character index arrays and build index permutations
  let subsequenceCnt = 0;
  for (let i = 0; i < char1Indexes.length; i++) {
    for (let j = 0; j < char2Indexes.length; j++) {
      for (let k = 0; k < char3Indexes.length; k++) {
        if (
          char1Indexes[i] < char2Indexes[j] &&
          char2Indexes[j] < char3Indexes[k]
        )
          subsequenceCnt++;
      }
    }
  }
  // return number of index permutations
  return subsequenceCnt;
};

console.log(getSubSequenceCount("ABC", "ABCBABC"));
console.log(getSubSequenceCount("HRW", "HWRWHHRWW"));
console.log(getSubSequenceCount("XYZ", "XZYYXX"));
console.log(getSubSequenceCount("ABD", "ABCBABC"));
