document.querySelector('.js-link-button').addEventListener('click', () => switchToLink());
document.querySelector('.js-reset-button').addEventListener('click', () => resetCanvas());

function resetCanvas() {
  nodes = [];
  edges = [];
  sourceNode = null;
  nextId = 0;
  updateGraph();
}