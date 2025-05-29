import {
  displayArray,
} from './sorting-visual.js';

import {
  generateRandomArray,
} from './sorting-algorithms.js';

function initialize() {
  generateRandomArray(40);
  displayArray();
}

initialize();