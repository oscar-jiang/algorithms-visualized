document.querySelector('.js-generate-array').addEventListener('click', () => {
  generateRandomArray(40);
});

document.querySelector('.js-sort-array').addEventListener('click', () => {
  mergeSort(arrayToBeSorted);
});