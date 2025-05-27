const GRAPH = d3.select('#graph');
const WIDTH = 877;
const HEIGHT = 410;
const BAR_HEIGHT_SCALE = 4;
const BAR_SPACING = 2;
const ANIMATION_TIME = 500;

// FUNCTIONS

// https://www.w3schools.com/graphics/svg_rect.asp
function displayArray() {
  const length = arrayToBeSorted.length;

  if (length === 0) {
    return;
  }

  GRAPH.selectAll('rect')
    .data(arrayToBeSorted, d => d.id)
    .join('rect')
    .attr('id', (d, i) => `bar-${d.id}`)
    .attr('width', WIDTH / length - BAR_SPACING)
    .attr('height', d => d.value * BAR_HEIGHT_SCALE)
    .attr('x', (d, i) => i * (WIDTH / length))
    .attr('y', d => HEIGHT - d.value * BAR_HEIGHT_SCALE)
    .attr('fill', 'lightblue');
}
function displaySortedArray() {
  const length = arrayToBeSorted.length;

  GRAPH.selectAll('rect')
    .data(arrayToBeSorted, d => d.id)
    .join('rect')
    .attr('id', (d, i) => `bar-${d.id}`)
    .attr('width', WIDTH / length - BAR_SPACING)
    .attr('height', d => d.value * BAR_HEIGHT_SCALE)
    .attr('x', (d, i) => i * (WIDTH / length))
    .attr('y', d => HEIGHT - d.value * BAR_HEIGHT_SCALE)
    .attr('fill', 'green');
}

function displayArraySelectionSort(currentElement, minElement) {
  const length = arrayToBeSorted.length;

  GRAPH.selectAll('rect')
    .data(arrayToBeSorted, d => d.id)
    .join('rect')
    .attr('id', (d, i) => `bar-${d.id}`)
    .attr('width', WIDTH / length - BAR_SPACING)
    .attr('height', d => d.value * BAR_HEIGHT_SCALE)
    .attr('x', (d, i) => i * (WIDTH / length))
    .attr('y', d => HEIGHT - d.value * BAR_HEIGHT_SCALE)
    .attr('fill', (d,i) => {
      if (i === currentElement) {
        return 'aqua';
      } else if (i === minElement) {
         return 'aquamarine'
      } else if ( i < currentElement){
        return 'green';
      } else {
        return 'lightblue';
      }
    });
}

function displayArraySelectionSortFindMin(startIndex, compareIndex, minIndex) {
  const length = arrayToBeSorted.length;

  GRAPH.selectAll('rect')
    .data(arrayToBeSorted, d => d.id)
    .join('rect')
    .attr('id', (d, i) => `bar-${d.id}`)
    .attr('width', WIDTH / length - BAR_SPACING)
    .attr('height', d => d.value * BAR_HEIGHT_SCALE)
    .attr('x', (d, i) => i * (WIDTH / length))
    .attr('y', d => HEIGHT - d.value * BAR_HEIGHT_SCALE)
    .attr('fill', (d,i) => {
      if (i < startIndex) {
        return 'green';
      } else if (i === minIndex) {
         return 'tomato'
      } else if ( i === compareIndex){
        return 'gold';
      } else {
        return 'lightblue';
      }
    });
}

function displayAnimationSelectionSortSwap(i, j) {
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

function displayArrayMergeSort(low, high) {
  const length = arrayToBeSorted.length;
  
  GRAPH.selectAll('rect')
    .data(arrayToBeSorted, d => d.id)
    .join('rect')
    .attr('id', (d, i) => `bar-${d.id}`)
    .attr('width', WIDTH / length - BAR_SPACING)
    .attr('height', d => d.value * BAR_HEIGHT_SCALE)
    .attr('x', (d, i) => i * (WIDTH / length))
    .attr('y', d => HEIGHT - d.value * BAR_HEIGHT_SCALE)
    .attr('fill', (d, i) => {
      if (i >= low && i <= high) {
        return 'gold';
      } else {
        return 'lightblue';
      }
    });
}
