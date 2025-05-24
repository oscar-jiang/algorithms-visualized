/*
 * Types of sorting algorithms
 * Bubble, Insertion, Selection, Quick, Merge
*/

/*
 * --- MERGE SORT ---
*/
function Merge(arr, low, mid, high) {
  let tempArr = [];

  let a = low;
  let b = mid + 1;

  for (let i = low; i <= high; i++) {
    if (a <= mid && (b > high || arr[a] < arr[b])) {
      tempArr.push(arr[a++]);
    } else {
      tempArr.push(arr[b++]);
    }
  }

  for (let i = low; i <= high; i++) {
    arr[i] = tempArr[i-low];
  }
}

function MSort(arr, low, high) {
  if (low < high) {
    let mid = Math.floor((low + high) / 2);

    MSort(arr, low, mid);
    MSort(arr, mid+1, high); 

    Merge(arr, low, mid, high);
  }
}

// CONSTRAINT: arr is a array on integers.
// this function is for the Havel-Hakimi Algorithm
function mergeSort(arr) {
  let size = arr.length;
  MSort(arr, 0, size-1);

  return arr;
}

// let unsorted = [1, 3, 6, 2, 9, 8];
// console.log(`Before being sorted: ${unsorted}`);

// let sorted = MergeSort(unsorted);
// console.log(`After being sorted: ${sorted}`);

/*
 * --- END MERGE SORT ---
*/

/*
 * --- BUBBLE SORT ---
*/
function bubbleSort(arr) {
  let n = arr.length; 
  let swapped; 

  for (let i = 0; i < n - 1; i++) {
    swapped = false; 

    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // performing swap
        let temp1 = arr[j];
        let temp2 = arr[j + 1];
        arr[j] = temp2;
        arr[j+1] = temp1;
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  return arr;
}

// let unsorted = [1, 3, 6, 2, 9, 8];
// console.log(`Before being sorted: ${unsorted}`);

// let sorted = bubbleSort(unsorted);
// console.log(`After being sorted: ${sorted}`);
/*
 * --- END BUBBLE SORT ---
*/

/*
 * --- QUICK SORT ---
*/
function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      let temp1 = arr[i];
      let temp2 = arr[j];
      arr[i] = temp2;
      arr[j] = temp1;
    }
  }

  let temp1 = arr[i + 1];
  let temp2 = arr[high];
  arr[i+1] = temp2;
  arr[high] = temp1;

  return i+1;
}

function qSort(arr, low, high) {
  if (low < high) {
    let p = partition(arr, low, high);

    qSort(arr,low,p - 1);
    qSort(arr, p + 1, high);
  }
}

function quickSort(arr) {
  let n = arr.length; 
  qSort(arr, 0, n-1);

  return arr;
}

// let unsorted = [1, 3, 6, 2, 9, 8];
// console.log(`Before being sorted: ${unsorted}`);

// let sorted = quickSort(unsorted);
// console.log(`After being sorted: ${sorted}`);

/*
 * --- END QUICK SORT ---
*/

/*
 * --- SELECTION SORT ---
*/

function indexOfMin(arr, i) {
  let minIndex = i;
  let n = arr.length;
  for (let j = i; j < n - i; j++) {
    if (arr[j] < arr[i]) {
      minIndex=j;
    }
  }

  return minIndex;
}

function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let min = indexOfMin(arr, i); 

    let temp1 = arr[min];
    let temp2 = arr[i];
    arr[min] = temp2;
    arr[i] = temp1;
  }

  return arr;
}
// let unsorted = [1, 3, 6, 2, 9, 8];
// console.log(`Before being sorted: ${unsorted}`);

// let sorted = selectionSort(unsorted);
// console.log(`After being sorted: ${sorted}`);
/*
 * --- END SELECTION SORT ---
*/

/*
 * --- INSERTION SORT ---
*/
function slide(arr, i) {
  // TODO
}

// RETURN arr => arr
function insertionSort(arr) {
  // TODO
}

// let unsorted = [1, 3, 6, 2, 9, 8];
// console.log(`Before being sorted: ${unsorted}`);

// let sorted = insertionSort(unsorted);
// console.log(`After being sorted: ${sorted}`);

/*
 * --- END INSERTION SORT ---
*/