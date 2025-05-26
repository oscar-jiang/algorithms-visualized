const GRAPH = d3.select('#graph');
const WIDTH = 877;
const HEIGHT = 410;

// FUNCTIONS

// https://www.w3schools.com/graphics/svg_rect.asp
function displayArray() {
  const length = arrayToBeSorted.length;

  GRAPH.selectAll('rect')
    .data(arrayToBeSorted)
    .join('rect')
    .attr('width', WIDTH / length - 2)
    .attr('height', d => d * 4)
    .attr('x', (d, i) => i * (WIDTH / length))
    .attr('y', d => HEIGHT - d * 4)
    .attr('fill', 'lightblue');
}
function displaySortedArray() {
  const length = arrayToBeSorted.length;

  GRAPH.selectAll('rect')
    .data(arrayToBeSorted)
    .join('rect')
    .attr('width', WIDTH / length - 2)
    .attr('height', d => d * 4)
    .attr('x', (d, i) => i * (WIDTH / length))
    .attr('y', d => HEIGHT - d * 4)
    .attr('fill', 'green');
}

function displayArraySelectionSort(currentElement, minElement) {
  const length = arrayToBeSorted.length;

  GRAPH.selectAll('rect')
    .data(arrayToBeSorted)
    .join('rect')
    .attr('width', WIDTH / length - 2)
    .attr('height', d => d * 4)
    .attr('x', (d, i) => i * (WIDTH / length))
    .attr('y', d => HEIGHT - d * 4)
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