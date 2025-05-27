document.querySelector('.js-generate-array').addEventListener('click', () => {
  generateRandomArray(numItems); 
});

document.querySelector('.js-sort-array').addEventListener('click', () => {
  displayPlayingStatus();
  determineSortingAlgorithm(algo);
});

document.getElementById('algorithm').onchange = (event) => {
  algo = event.target.value;
};

document.querySelector('.playback-speed-slider').onchange = (event) => {
  sleepTime = event.target.value;
  displaySpeed();
};

document.querySelector('.num-items-slider').onchange = (event) => {
  numItems = event.target.value;
  displayNumItems();
};