document.querySelector('.js-generate-array').addEventListener('click', () => {
  generateRandomArray(40); // 300 max? 
});

document.querySelector('.js-sort-array').addEventListener('click', () => {
  quickSort(arrayToBeSorted);
});