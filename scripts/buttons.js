var drawingMode = 'draw';

document.querySelector('.js-draw-button').addEventListener('click', () => switchToDraw());
document.querySelector('.js-delete-button').addEventListener('click', () => switchToDelete());
document.querySelector('.js-link-button').addEventListener('click', () => switchToLink());
document.querySelector('.js-reset-button').addEventListener('click', () => resetCanvas());

function switchToDelete() {
  document.querySelector('.left-paragraph').innerHTML = "Current drawing mode: Delete";
  document.querySelector('.js-control-panel-info-about-buttons').innerHTML = "In Delete mode you can click anywhere on a node to remove it.";
  drawingMode = 'delete';
}

function switchToDraw() {
  document.querySelector('.left-paragraph').innerHTML = "Current drawing mode: Draw";
  document.querySelector('.js-control-panel-info-about-buttons').innerHTML = "In Draw mode you can click anywhere on the canvas to place a node.";
  drawingMode = 'draw';
}

function switchToLink() {
  document.querySelector('.left-paragraph').innerHTML = "Current drawing mode: Link";
  document.querySelector('.js-control-panel-info-about-buttons').innerHTML = "In Link mode you can click one node and then another node to place an edge.";
  drawingMode = 'link';
}

function resetCanvas() {
  nodes = [];
  edges = [];
  sourceNode = null;
  nextId = 0;
  updateGraph();
}