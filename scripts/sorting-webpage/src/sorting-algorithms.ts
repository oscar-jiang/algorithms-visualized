import {
  displayArray,
  displayArrayMergeSort,
  displayArrayQuickSort,
  displayArrayBubbleSort,
  displayArraySelectionSort,
  displayArraySelectionSortFindMin,
  displayUnsortedStatus,
  displaySortedArray,
  displayFinishedStatus
} from './sorting-visual.js';

// VARIABLES
const MIN: number = 5;
const MAX: number = 100;
export let sleepTime:number = 50; // in ms
let nextId:number = 0;
export let numItems:number = 40;
export let algo:string = 'merge';

// Types
type BarData = {
  readonly id: number,
  value: number
}

// Array holds an list of integers
export let arrayToBeSorted: BarData[] = [];

// FUNCTIONS
function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function isEmpty(arr: BarData[]) {
  return arr.length === 0;
}

export async function determineSortingAlgorithm(v: string) {
  switch (v) {
    case 'merge':
      await mergeSort(arrayToBeSorted);
      break;
    case 'quick':
      await quickSort(arrayToBeSorted);
      break;
    case 'selection':
      await selectionSort(arrayToBeSorted);
      break;
    case 'bubble': 
      await bubbleSort(arrayToBeSorted);
      break;
    default:
      await mergeSort(arrayToBeSorted);
  }
}

// Will clear the array first
export function generateRandomArray(n: number) {
  arrayToBeSorted = [];
  nextId = 0;
  displayUnsortedStatus();

  for (let i = 0; i < n; i++) {
    let int: number = getIntFromRange(MIN, MAX);

    let object: BarData = {
      id: nextId++,
      value: int
    };

    arrayToBeSorted.push(object);
  }

  displayArray();
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getIntFromRange(min: number, max: number){
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max); 
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

/*
 * Types of sorting algorithms
 * Bubble, Insertion, Selection, Quick, Merge
*/

/*
 * --- MERGE SORT ---
*/
async function Merge(arr: BarData[], low: number, mid:number, high:number) {
  let tempArr: BarData[] = [];

  let a = low;
  let b = mid + 1;

  while (a <= mid && b <= high) {
    if (arr[a].value <= arr[b].value) {
      tempArr.push(arr[a++]);
    } else {
      tempArr.push(arr[b++]);
    }
  }

  while (a <= mid) {
    tempArr.push(arr[a++]);
  }

  while (b <= high) {
    tempArr.push(arr[b++]);
  }

  for (let i = 0; i < tempArr.length; i++) {
    arr[low + i] = tempArr[i];
  }

  displayArrayMergeSort(low, high);
  await sleep(sleepTime);
}

async function MSort(arr: BarData[], low: number, high: number) {
  if (low < high) {
    let mid = Math.floor((low + high) / 2);

    await MSort(arr, low, mid);
    await MSort(arr, mid+1, high); 

    await Merge(arr, low, mid, high);
  }
}

// CONSTRAINT: arr is a array on integers.
async function mergeSort(arr: BarData[]): Promise<BarData[]> {
  let size = arr.length;
  await MSort(arr, 0, size-1);

  displaySortedArray();
  displayFinishedStatus();
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
async function bubbleSort(arr: BarData[]): Promise<BarData[]> {
  let n = arr.length; 
  let swapped; 

  for (let i = 0; i < n - 1; i++) {
    swapped = false; 

    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j].value > arr[j + 1].value) {
        // performing swap
        let temp1 = arr[j];
        let temp2 = arr[j + 1];
        arr[j] = temp2;
        arr[j+1] = temp1;
        swapped = true;

        displayArrayBubbleSort(j , j+1, n-i-1);
        await sleep(sleepTime);
      }
    }

    if (!swapped) {
      break;
    }
  }

  displaySortedArray();
  displayFinishedStatus();
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
async function partition(arr: BarData[], low: number, high: number) {
  let pivot = arr[high].value;
  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    if (arr[j].value < pivot) {
      i++;
      let temp1 = arr[i];
      let temp2 = arr[j];
      arr[i] = temp2;
      arr[j] = temp1;

      displayArrayQuickSort(low, high, i, j , high);
      await sleep(sleepTime);
    }
  }

  let temp1 = arr[i + 1];
  let temp2 = arr[high];
  arr[i+1] = temp2;
  arr[high] = temp1;

  return i+1;
}

async function qSort(arr: BarData[], low: number, high: number) {
  if (low < high) {
    let p = await partition(arr, low, high);

    await qSort(arr,low,p - 1);
    await qSort(arr, p + 1, high);
  }
}

async function quickSort(arr:BarData[]): Promise<BarData[]> {
  let n = arr.length; 
  await qSort(arr, 0, n-1);

  displaySortedArray();
  displayFinishedStatus();
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

async function indexOfMin(arr:BarData[], i:number) {
  let minIndex = i;
  let n = arr.length;
  for (let j = i; j < n; j++) {
    displayArraySelectionSortFindMin(i, j, minIndex);
    await sleep(sleepTime);
    if (arr[j].value < arr[minIndex].value) {
      minIndex=j;
      displayArraySelectionSortFindMin(i, j, minIndex);
      await sleep(sleepTime);
    }
  }
  return minIndex;
}

async function selectionSort(arr: BarData[]): Promise<BarData[]> {
  let n = arr.length;
  for (let currentElement = 0; currentElement < n; currentElement++) {
    let minElement = await indexOfMin(arr, currentElement);

    // displayAnimationSelectionSortSwap(currentElement, minElement);
    // await sleep(ANIMATION_TIME);

    let temp1 = arr[minElement];
    let temp2 = arr[currentElement];
    arr[minElement] = temp2;
    arr[currentElement] = temp1;
    displayArraySelectionSort(currentElement,minElement);
    await sleep(sleepTime);
  }

  displaySortedArray();
  displayFinishedStatus();
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
function slide(arr: BarData[], i: number) {
  // TODO
}

// RETURN arr => arr
function insertionSort(arr: BarData[], i: number) {
  // TODO
}

// let unsorted = [1, 3, 6, 2, 9, 8];
// console.log(`Before being sorted: ${unsorted}`);

// let sorted = insertionSort(unsorted);
// console.log(`After being sorted: ${sorted}`);

/*
 * --- END INSERTION SORT ---
*/

// SETTERS
export function setNumItems(num: number): void {
  numItems = num;
}

export function setAlgo(string: string): void {
  algo = string;
}

export function setSleepTime(num: number):void {
  sleepTime = num;
}

// GETTERS