var _a, _b, _c, _d, _e;
import { displayCodeBlock, displayPlayingStatus, displaySpeed, displayNumItems } from './sorting-visual.js';
import { generateRandomArray, determineSortingAlgorithm, numItems, algo, setAlgo, setNumItems, setSleepTime } from './sorting-algorithms.js';
(_a = document.querySelector('.js-generate-array')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    generateRandomArray(numItems);
});
(_b = document.querySelector('.js-sort-array')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
    displayPlayingStatus();
    determineSortingAlgorithm(algo);
});
(_c = document.getElementById('algorithm')) === null || _c === void 0 ? void 0 : _c.addEventListener('change', (event) => {
    const target = event.target;
    setAlgo(target.value);
    displayCodeBlock();
});
(_d = document.querySelector('.playback-speed-slider')) === null || _d === void 0 ? void 0 : _d.addEventListener('change', (event) => {
    const target = event.target;
    setSleepTime(Number(target.value));
    displaySpeed();
});
(_e = document.querySelector('.num-items-slider')) === null || _e === void 0 ? void 0 : _e.addEventListener('change', (event) => {
    const target = event.target;
    setNumItems(Number(target.value));
    displayNumItems();
});
