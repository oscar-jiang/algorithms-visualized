let impossibleSequence1 = [6,5,5,4,3,3,3,2,2];
let impossibleSequence2 = [7,6,4,3,3,2];

let possibleSequence1 = [3,3,2,2,1,1];
let possibleSequence2 = [5,4,3,3,2,2,2,1,1,1];

function isEmpty(arr) {
  return arr.length === 0;
}

// CONSTRAINTS: arr is a non-increasing array of integers
// arr => boolean
function havelHakimiAlgorithm(arr) {
  while (arr.length > 0) {
    const sortedArr = MergeSort(arr).reverse();

    if (sortedArr[0] === 0) {
      return true; 
    }

    let highestDegree = sortedArr[0];
    sortedArr.splice(0, 1);

    if (highestDegree > sortedArr.length) {
      return false;
    }

    for (let i = 0; i < highestDegree; i++) {
      sortedArr[i]--;

      if (sortedArr[i] < 0) {
        return false;
      }
    }

    arr = sortedArr;
  }
}