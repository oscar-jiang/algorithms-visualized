
import {
  displayCodeBlock,
  displayPlayingStatus,
  displaySpeed,
  displayNumItems
} from './sorting-visual.js';

import {
  generateRandomArray,
  determineSortingAlgorithm,
  numItems,
  algo,
  setAlgo,
  setNumItems,
  setSleepTime
} from './sorting-algorithms.js';


document.querySelector('.js-generate-array')?.addEventListener('click', () => {
  generateRandomArray(numItems); 
});

document.querySelector('.js-sort-array')?.addEventListener('click', () => {
  displayPlayingStatus();
  determineSortingAlgorithm(algo);
});

document.getElementById('algorithm')?.addEventListener('change', (event) => {
  const target = event.target as HTMLSelectElement;

  setAlgo(target.value);

  displayCodeBlock();
});

document.querySelector('.playback-speed-slider')?.addEventListener('change', (event) => {
  const target = event.target as HTMLSelectElement;

  setSleepTime(Number(target.value));

  displaySpeed();
});

document.querySelector('.num-items-slider')?.addEventListener('change', (event) => {
  const target = event.target as HTMLSelectElement;

  setNumItems(Number(target.value));

  displayNumItems();
});
