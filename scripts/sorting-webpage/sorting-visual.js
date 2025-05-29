import * as d3 from "https://cdn.skypack.dev/d3";
import { arrayToBeSorted } from './sorting-algorithms.js';
import { numItems, algo, sleepTime } from './sorting-algorithms.js';
// --- TYPES AND CONSTANTS
const GRAPH = d3.select('#graph');
const WIDTH = 877;
const HEIGHT = 410;
const BAR_HEIGHT_SCALE = 4;
const BAR_SPACING = 2;
const ANIMATION_TIME = 500;
const FINISHED_COLOUR = '#34d248';
const DEFAULT_COLOUR = 'lightblue';
// FUNCTIONS
// https://www.w3schools.com/graphics/svg_rect.asp
export function displayArray() {
    const length = arrayToBeSorted.length;
    if (length === 0) {
        return;
    }
    GRAPH.selectAll('rect')
        .data(arrayToBeSorted, (d) => d.id)
        .join('rect')
        .attr('id', (d, i) => `bar-${d.id}`)
        .attr('width', WIDTH / length - BAR_SPACING)
        .attr('height', (d) => d.value * BAR_HEIGHT_SCALE)
        .attr('x', (d, i) => i * (WIDTH / length))
        .attr('y', (d) => HEIGHT - d.value * BAR_HEIGHT_SCALE)
        .attr('fill', DEFAULT_COLOUR);
}
export function displaySortedArray() {
    const length = arrayToBeSorted.length;
    GRAPH.selectAll('rect')
        .data(arrayToBeSorted, (d) => d.id)
        .join('rect')
        .attr('id', (d, i) => `bar-${d.id}`)
        .attr('width', WIDTH / length - BAR_SPACING)
        .attr('height', (d) => d.value * BAR_HEIGHT_SCALE)
        .attr('x', (d, i) => i * (WIDTH / length))
        .attr('y', (d) => HEIGHT - d.value * BAR_HEIGHT_SCALE)
        .attr('fill', FINISHED_COLOUR);
}
export function displayArraySelectionSort(currentElement, minElement) {
    const length = arrayToBeSorted.length;
    GRAPH.selectAll('rect')
        .data(arrayToBeSorted, (d) => d.id)
        .join('rect')
        .attr('id', (d, i) => `bar-${d.id}`)
        .attr('width', WIDTH / length - BAR_SPACING)
        .attr('height', (d) => d.value * BAR_HEIGHT_SCALE)
        .attr('x', (d, i) => i * (WIDTH / length))
        .attr('y', (d) => HEIGHT - d.value * BAR_HEIGHT_SCALE)
        .attr('fill', (d, i) => {
        if (i === currentElement) {
            return 'aqua';
        }
        else if (i === minElement) {
            return 'aquamarine';
        }
        else if (i < currentElement) {
            return FINISHED_COLOUR;
        }
        else {
            return DEFAULT_COLOUR;
        }
    });
}
export function displayArraySelectionSortFindMin(startIndex, compareIndex, minIndex) {
    const length = arrayToBeSorted.length;
    GRAPH.selectAll('rect')
        .data(arrayToBeSorted, (d) => d.id)
        .join('rect')
        .attr('id', (d, i) => `bar-${d.id}`)
        .attr('width', WIDTH / length - BAR_SPACING)
        .attr('height', (d) => d.value * BAR_HEIGHT_SCALE)
        .attr('x', (d, i) => i * (WIDTH / length))
        .attr('y', (d) => HEIGHT - d.value * BAR_HEIGHT_SCALE)
        .attr('fill', (d, i) => {
        if (i < startIndex) {
            return FINISHED_COLOUR;
        }
        else if (i === minIndex) {
            return 'tomato';
        }
        else if (i === compareIndex) {
            return 'gold';
        }
        else {
            return DEFAULT_COLOUR;
        }
    });
}
export function displayAnimationSelectionSortSwap(i, j) {
    const length = arrayToBeSorted.length;
    GRAPH.select(`bar-${i}`)
        .transition()
        .duration(ANIMATION_TIME)
        .attr('x', j * (WIDTH / length));
    GRAPH.select(`bar-${j}`)
        .transition()
        .duration(ANIMATION_TIME)
        .attr('x', i * (WIDTH / length));
}
export function displayArrayMergeSort(low, high) {
    const length = arrayToBeSorted.length;
    GRAPH.selectAll('rect')
        .data(arrayToBeSorted, (d) => d.id)
        .join('rect')
        .attr('id', (d, i) => `bar-${d.id}`)
        .attr('width', WIDTH / length - BAR_SPACING)
        .attr('height', (d) => d.value * BAR_HEIGHT_SCALE)
        .attr('x', (d, i) => i * (WIDTH / length))
        .attr('y', (d) => HEIGHT - d.value * BAR_HEIGHT_SCALE)
        .attr('fill', (d, i) => {
        if (i >= low && i <= high) {
            return 'gold';
        }
        else {
            return DEFAULT_COLOUR;
        }
    });
}
export function displayArrayBubbleSort(a, b, c) {
    const length = arrayToBeSorted.length;
    GRAPH.selectAll('rect')
        .data(arrayToBeSorted, (d) => d.id)
        .join('rect')
        .attr('id', (d, i) => `bar-${d.id}`)
        .attr('width', WIDTH / length - BAR_SPACING)
        .attr('height', (d) => d.value * BAR_HEIGHT_SCALE)
        .attr('x', (d, i) => i * (WIDTH / length))
        .attr('y', (d) => HEIGHT - d.value * BAR_HEIGHT_SCALE)
        .attr('fill', (d, i) => {
        if (i === a || i === b) {
            return 'gold';
        }
        else if (i >= c) {
            return FINISHED_COLOUR;
        }
        else {
            return DEFAULT_COLOUR;
        }
    });
}
export function displayArrayQuickSort(low, high, a, b, pivot) {
    const length = arrayToBeSorted.length;
    GRAPH.selectAll('rect')
        .data(arrayToBeSorted, (d) => d.id)
        .join('rect')
        .attr('id', (d, i) => `bar-${d.id}`)
        .attr('width', WIDTH / length - BAR_SPACING)
        .attr('height', (d) => d.value * BAR_HEIGHT_SCALE)
        .attr('x', (d, i) => i * (WIDTH / length))
        .attr('y', (d) => HEIGHT - d.value * BAR_HEIGHT_SCALE)
        .attr('fill', (d, i) => {
        if (i === pivot) {
            return 'gold';
        }
        else if (i === a) {
            return 'red';
        }
        else if (i === b) {
            return 'orange';
        }
        else {
            return DEFAULT_COLOUR;
        }
    });
}
export function displayFinishedStatus() {
    const status = document.getElementById('status');
    if (!status) {
        return;
    }
    status.innerHTML = "📊✅Sorted";
}
export function displayUnsortedStatus() {
    const status = document.getElementById('status');
    if (!status) {
        return;
    }
    status.innerHTML = "📦❓Unsorted";
}
export function displayPlayingStatus() {
    const status = document.getElementById('status');
    if (!status) {
        return;
    }
    status.innerHTML = "🔀🔄Playing...";
}
export function displaySpeed() {
    const playbackLabel = document.getElementById('display-current-value-playback-speed');
    if (!playbackLabel) {
        return;
    }
    playbackLabel.innerHTML = `Speed: ${sleepTime}ms`;
}
export function displayNumItems() {
    const numItemLabel = document.getElementById('display-current-value-num-items');
    if (!numItemLabel) {
        return;
    }
    numItemLabel.innerHTML = `Number of items: ${numItems}`;
}
export function displayCodeBlock() {
    const codeBlock = document.querySelector(".code-block");
    if (!codeBlock) {
        return;
    }
    let content = '';
    switch (algo) {
        case 'merge':
            content = `
        <h3 class="subheading-code-block">🧩 Merge Sort</h3>
        <pre><code>
Function mergeSort(array):
    If length of array > 1:
        Split array into left and right halves
        mergeSort(left)
        mergeSort(right)
        Merge sorted left and right into original array
        </code></pre>`;
            break;
        case 'quick':
            content = `
        <h3 class="subheading-code-block">⚡ Quick Sort</h3>
        <pre><code>
Function quickSort(array, low, high):
    If low < high:
        pivotIndex = partition(array, low, high)
        quickSort(array, low, pivotIndex - 1)
        quickSort(array, pivotIndex + 1, high)

Function partition(array, low, high):
    Choose pivot (e.g., array[high])
    i = low - 1
    For j from low to high - 1:
        If array[j] < pivot:
            i = i + 1
            Swap array[i] and array[j]
    Swap array[i + 1] and array[high]
    Return i + 1
        </code></pre>`;
            break;
        case 'selection':
            content = `
        <h3 class="subheading-code-block">🔍 Selection Sort</h3>
        <pre><code>
For i from 0 to n - 1:
    minIndex = i
    For j from i + 1 to n - 1:
        If array[j] < array[minIndex]:
            minIndex = j
    Swap array[i] and array[minIndex]
        </code></pre>`;
            break;
        case 'bubble':
            content = `
        <h3 class="subheading-code-block">🫧 Bubble Sort</h3>
        <pre><code>
For i from 0 to n - 1
    For j from 0 to n - i - 2
        If array[j] > array[j + 1]
            Swap array[j] and array[j + 1]
        </code></pre>`;
            break;
        default:
            content = `<p>No code found for this algorithm.</p>`;
    }
    codeBlock.innerHTML = content;
}
