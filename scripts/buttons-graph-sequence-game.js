document.querySelector('.js-reset-button').addEventListener('click', () => resetCanvas());
document.querySelector('.graph-sequence-level-buttons-level-one').addEventListener('click', () => loadLevel(1));
document.querySelector('.graph-sequence-level-buttons-level-two').addEventListener('click', () => loadLevel(2));
document.querySelector('.graph-sequence-level-buttons-level-three').addEventListener('click', () => loadLevel(3));
document.querySelector('.graph-sequence-level-buttons-level-four').addEventListener('click', () => loadLevel(4));
document.querySelector('.graph-sequence-level-buttons-level-five').addEventListener('click', () => loadLevel(5));
document.querySelector('.graph-sequence-level-buttons-level-six').addEventListener('click', () => loadLevel(6));
document.querySelector('.graph-sequence-level-buttons-level-seven').addEventListener('click', () => loadLevel(7));
document.querySelector('.graph-sequence-level-buttons-level-eight').addEventListener('click', () => loadLevel(8));
document.querySelector('.graph-sequence-level-buttons-level-nine').addEventListener('click', () => loadLevel(9));
document.querySelector('.graph-sequence-level-buttons-level-ten').addEventListener('click', () => loadLevel(10));

var levels = [null, level1, level2, level3, level4, level5, level6, level7, level8, level9, level10];

function resetCanvas() {
  loadGraph(levels[currentLevel]());
}

function loadLevel(levelNumber) {
  loadGraph(levels[levelNumber]());
}