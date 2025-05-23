var drawingMode = 'draw';

document.querySelector('.js-draw-button').addEventListener('click', () => switchToDraw());
document.querySelector('.js-delete-button').addEventListener('click', () => switchToDelete());
document.querySelector('.js-link-button').addEventListener('click', () => switchToLink());
document.querySelector('.js-reset-button').addEventListener('click', () => resetCanvas());

function switchToDelete() {
  document.querySelector('.left-paragraph').innerHTML = "Current drawing mode: Delete";
  drawingMode = 'delete';
}

function switchToDraw() {
  document.querySelector('.left-paragraph').innerHTML = "Current drawing mode: Draw";
  drawingMode = 'draw';
}

function switchToLink() {
  document.querySelector('.left-paragraph').innerHTML = "Current drawing mode: Link";
  drawingMode = 'link';
}

function resetCanvas() {
  nodes = [];
  edges = [];
  sourceNode = null;
  nextId = 0;
  updateGraph();
}