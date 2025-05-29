var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { displayArray, displayArrayMergeSort, displayArrayQuickSort, displayArrayBubbleSort, displayArraySelectionSort, displayArraySelectionSortFindMin, displayUnsortedStatus, displaySortedArray, displayFinishedStatus } from './sorting-visual.js';
// VARIABLES
const MIN = 5;
const MAX = 100;
export let sleepTime = 50; // in ms
let nextId = 0;
export let numItems = 40;
export let algo = 'merge';
// Array holds an list of integers
export let arrayToBeSorted = [];
// FUNCTIONS
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function isEmpty(arr) {
    return arr.length === 0;
}
export function determineSortingAlgorithm(v) {
    return __awaiter(this, void 0, void 0, function* () {
        switch (v) {
            case 'merge':
                yield mergeSort(arrayToBeSorted);
                break;
            case 'quick':
                yield quickSort(arrayToBeSorted);
                break;
            case 'selection':
                yield selectionSort(arrayToBeSorted);
                break;
            case 'bubble':
                yield bubbleSort(arrayToBeSorted);
                break;
            default:
                yield mergeSort(arrayToBeSorted);
        }
    });
}
// Will clear the array first
export function generateRandomArray(n) {
    arrayToBeSorted = [];
    nextId = 0;
    displayUnsortedStatus();
    for (let i = 0; i < n; i++) {
        let int = getIntFromRange(MIN, MAX);
        let object = {
            id: nextId++,
            value: int
        };
        arrayToBeSorted.push(object);
    }
    displayArray();
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getIntFromRange(min, max) {
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
function Merge(arr, low, mid, high) {
    return __awaiter(this, void 0, void 0, function* () {
        let tempArr = [];
        let a = low;
        let b = mid + 1;
        while (a <= mid && b <= high) {
            if (arr[a].value <= arr[b].value) {
                tempArr.push(arr[a++]);
            }
            else {
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
        yield sleep(sleepTime);
    });
}
function MSort(arr, low, high) {
    return __awaiter(this, void 0, void 0, function* () {
        if (low < high) {
            let mid = Math.floor((low + high) / 2);
            yield MSort(arr, low, mid);
            yield MSort(arr, mid + 1, high);
            yield Merge(arr, low, mid, high);
        }
    });
}
// CONSTRAINT: arr is a array on integers.
function mergeSort(arr) {
    return __awaiter(this, void 0, void 0, function* () {
        let size = arr.length;
        yield MSort(arr, 0, size - 1);
        displaySortedArray();
        displayFinishedStatus();
        return arr;
    });
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
    return __awaiter(this, void 0, void 0, function* () {
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
                    arr[j + 1] = temp1;
                    swapped = true;
                    displayArrayBubbleSort(j, j + 1, n - i - 1);
                    yield sleep(sleepTime);
                }
            }
            if (!swapped) {
                break;
            }
        }
        displaySortedArray();
        displayFinishedStatus();
        return arr;
    });
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
    return __awaiter(this, void 0, void 0, function* () {
        let pivot = arr[high].value;
        let i = low - 1;
        for (let j = low; j <= high - 1; j++) {
            if (arr[j].value < pivot) {
                i++;
                let temp1 = arr[i];
                let temp2 = arr[j];
                arr[i] = temp2;
                arr[j] = temp1;
                displayArrayQuickSort(low, high, i, j, high);
                yield sleep(sleepTime);
            }
        }
        let temp1 = arr[i + 1];
        let temp2 = arr[high];
        arr[i + 1] = temp2;
        arr[high] = temp1;
        return i + 1;
    });
}
function qSort(arr, low, high) {
    return __awaiter(this, void 0, void 0, function* () {
        if (low < high) {
            let p = yield partition(arr, low, high);
            yield qSort(arr, low, p - 1);
            yield qSort(arr, p + 1, high);
        }
    });
}
function quickSort(arr) {
    return __awaiter(this, void 0, void 0, function* () {
        let n = arr.length;
        yield qSort(arr, 0, n - 1);
        displaySortedArray();
        displayFinishedStatus();
        return arr;
    });
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
    return __awaiter(this, void 0, void 0, function* () {
        let minIndex = i;
        let n = arr.length;
        for (let j = i; j < n; j++) {
            displayArraySelectionSortFindMin(i, j, minIndex);
            yield sleep(sleepTime);
            if (arr[j].value < arr[minIndex].value) {
                minIndex = j;
                displayArraySelectionSortFindMin(i, j, minIndex);
                yield sleep(sleepTime);
            }
        }
        return minIndex;
    });
}
function selectionSort(arr) {
    return __awaiter(this, void 0, void 0, function* () {
        let n = arr.length;
        for (let currentElement = 0; currentElement < n; currentElement++) {
            let minElement = yield indexOfMin(arr, currentElement);
            // displayAnimationSelectionSortSwap(currentElement, minElement);
            // await sleep(ANIMATION_TIME);
            let temp1 = arr[minElement];
            let temp2 = arr[currentElement];
            arr[minElement] = temp2;
            arr[currentElement] = temp1;
            displayArraySelectionSort(currentElement, minElement);
            yield sleep(sleepTime);
        }
        displaySortedArray();
        displayFinishedStatus();
        return arr;
    });
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
function insertionSort(arr, i) {
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
export function setNumItems(num) {
    numItems = num;
}
export function setAlgo(string) {
    algo = string;
}
export function setSleepTime(num) {
    sleepTime = num;
}
// GETTERS
