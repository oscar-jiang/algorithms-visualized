
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
function MergeSort(arr) {
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