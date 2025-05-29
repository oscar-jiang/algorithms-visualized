import * as d3 from "https://cdn.skypack.dev/d3";
import { arrayToBeSorted } from './sorting-algorithms.js';
import {
  numItems,
  algo,
  sleepTime
} from './sorting-algorithms.js';

// --- TYPES AND CONSTANTS
const GRAPH = d3.select('#graph');
const WIDTH = 877;
const HEIGHT = 410;
const BAR_HEIGHT_SCALE = 4;
const BAR_SPACING = 2;
const ANIMATION_TIME = 500;
const FINISHED_COLOUR = '#34d248';
const DEFAULT_COLOUR = 'lightblue';

type BarData = {
  readonly id: number,
  value: number
}

// FUNCTIONS

// https://www.w3schools.com/graphics/svg_rect.asp
export function displayArray(): void {
  const length = arrayToBeSorted.length;

  if (length === 0) {
    return;
  }

  GRAPH.selectAll<SVGRectElement, BarData>('rect')
    .data(arrayToBeSorted, (d: BarData) => d.id)
    .join('rect')
    .attr('id', (d: BarData, i:number) => `bar-${d.id}`)
    .attr('width', WIDTH / length - BAR_SPACING)
    .attr('height', (d:BarData) => d.value * BAR_HEIGHT_SCALE)
    .attr('x', (d: BarData, i:number) => i * (WIDTH / length))
    .attr('y', (d:BarData) => HEIGHT - d.value * BAR_HEIGHT_SCALE)
    .attr('fill', DEFAULT_COLOUR);
}

export function displaySortedArray(): void {
  const length = arrayToBeSorted.length;

  GRAPH.selectAll<SVGRectElement, BarData>('rect')
    .data(arrayToBeSorted, (d: BarData) => d.id)
    .join('rect')
    .attr('id', (d: BarData, i:number) => `bar-${d.id}`)
    .attr('width', WIDTH / length - BAR_SPACING)
    .attr('height', (d:BarData) => d.value * BAR_HEIGHT_SCALE)
    .attr('x', (d: BarData, i:number) => i * (WIDTH / length))
    .attr('y', (d:BarData) => HEIGHT - d.value * BAR_HEIGHT_SCALE)
    .attr('fill', FINISHED_COLOUR);
}

export function displayArraySelectionSort(currentElement: number, minElement:number): void {
  const length = arrayToBeSorted.length;

  GRAPH.selectAll<SVGRectElement, BarData>('rect')
    .data(arrayToBeSorted, (d: BarData) => d.id)
    .join('rect')
    .attr('id', (d: BarData, i:number) => `bar-${d.id}`)
    .attr('width', WIDTH / length - BAR_SPACING)
    .attr('height', (d:BarData) => d.value * BAR_HEIGHT_SCALE)
    .attr('x', (d: BarData, i:number) => i * (WIDTH / length))
    .attr('y', (d:BarData) => HEIGHT - d.value * BAR_HEIGHT_SCALE)
    .attr('fill', (d: BarData, i:number) => {
      if (i === currentElement) {
        return 'aqua';
      } else if (i === minElement) {
         return 'aquamarine'
      } else if ( i < currentElement){
        return FINISHED_COLOUR;
      } else {
        return DEFAULT_COLOUR;
      }
    });
}

export function displayArraySelectionSortFindMin(startIndex:number, compareIndex:number, minIndex:number): void {
  const length = arrayToBeSorted.length;

  GRAPH.selectAll<SVGRectElement, BarData>('rect')
    .data(arrayToBeSorted, (d: BarData) => d.id)
    .join('rect')
    .attr('id', (d: BarData, i:number) => `bar-${d.id}`)
    .attr('width', WIDTH / length - BAR_SPACING)
    .attr('height', (d:BarData) => d.value * BAR_HEIGHT_SCALE)
    .attr('x', (d: BarData, i:number) => i * (WIDTH / length))
    .attr('y', (d:BarData) => HEIGHT - d.value * BAR_HEIGHT_SCALE)
    .attr('fill', (d: BarData, i:number) => {
      if (i < startIndex) {
        return FINISHED_COLOUR;
      } else if (i === minIndex) {
         return 'tomato'
      } else if ( i === compareIndex){
        return 'gold';
      } else {
        return DEFAULT_COLOUR;
      }
    });
}

export function displayAnimationSelectionSortSwap(i:number, j:number): void {
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

export function displayArrayMergeSort(low:number, high:number):void {
  const length = arrayToBeSorted.length;

  GRAPH.selectAll<SVGRectElement, BarData>('rect')
    .data(arrayToBeSorted, (d: BarData) => d.id)
    .join('rect')
    .attr('id', (d: BarData, i:number) => `bar-${d.id}`)
    .attr('width', WIDTH / length - BAR_SPACING)
    .attr('height', (d:BarData) => d.value * BAR_HEIGHT_SCALE)
    .attr('x', (d: BarData, i:number) => i * (WIDTH / length))
    .attr('y', (d:BarData) => HEIGHT - d.value * BAR_HEIGHT_SCALE)
    .attr('fill', (d: BarData, i:number) => {
      if (i >= low && i <= high) {
        return 'gold';
      } else {
        return DEFAULT_COLOUR;
      }
    });
}

export function displayArrayBubbleSort(a:number, b:number, c:number): void {
  const length = arrayToBeSorted.length;

  GRAPH.selectAll<SVGRectElement, BarData>('rect')
    .data(arrayToBeSorted, (d: BarData) => d.id)
    .join('rect')
    .attr('id', (d: BarData, i:number) => `bar-${d.id}`)
    .attr('width', WIDTH / length - BAR_SPACING)
    .attr('height', (d:BarData) => d.value * BAR_HEIGHT_SCALE)
    .attr('x', (d: BarData, i:number) => i * (WIDTH / length))
    .attr('y', (d:BarData) => HEIGHT - d.value * BAR_HEIGHT_SCALE)
    .attr('fill', (d: BarData, i:number) => {
      if (i === a || i === b) {
        return 'gold';
      } else if (i >= c) {
        return FINISHED_COLOUR;
      } else {
        return DEFAULT_COLOUR;
      }
    });
}

export function displayArrayQuickSort(low:number, high:number, a:number, b:number, pivot:number): void {
  const length = arrayToBeSorted.length;

  GRAPH.selectAll<SVGRectElement, BarData>('rect')
    .data(arrayToBeSorted, (d: BarData): number => d.id)
    .join('rect')
    .attr('id', (d: BarData, i:number) => `bar-${d.id}`)
    .attr('width', WIDTH / length - BAR_SPACING)
    .attr('height', (d:BarData) => d.value * BAR_HEIGHT_SCALE)
    .attr('x', (d: BarData, i:number) => i * (WIDTH / length))
    .attr('y', (d:BarData) => HEIGHT - d.value * BAR_HEIGHT_SCALE)
    .attr('fill', (d: BarData, i:number) => {
      if (i === pivot) {
        return 'gold';
      } else if (i === a) {
        return 'red';
      } else if (i === b) {
        return 'orange';
      } else {
        return DEFAULT_COLOUR;
      }
    });
}

export function displayFinishedStatus(): void {
  const status = document.getElementById('status');

  if (!status) {
    return;
  }

  status.innerHTML = "📊✅Sorted";
}

export function displayUnsortedStatus(): void {
  const status = document.getElementById('status');

  if (!status) {
    return;
  }

  status.innerHTML = "📦❓Unsorted";
}

export function displayPlayingStatus(): void {
  const status = document.getElementById('status');

  if (!status) {
    return;
  }

  status.innerHTML = "🔀🔄Playing...";
}

export function displaySpeed(): void {
  const playbackLabel = document.getElementById('display-current-value-playback-speed');
  if (!playbackLabel) {
    return;
  }

  playbackLabel.innerHTML = `Speed: ${sleepTime}ms`;
}

export function displayNumItems(): void {
  const numItemLabel = document.getElementById('display-current-value-num-items');

  if (!numItemLabel) {
    return;
  }
  
  numItemLabel.innerHTML = `Number of items: ${numItems}`;
}

export function displayCodeBlock(): void {
  const codeBlock = document.querySelector(".code-block");

  if (!codeBlock) {
    return;
  }

  let content: string = '';

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