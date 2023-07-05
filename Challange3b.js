const bubbleSort = require('./Challange2.js');

function mergeAndRemoveDuplicates(arr1, arr2) {
  const mergedArray = arr1.concat(arr2);
  const uniqueArray = [...new Set(mergedArray)];
  return uniqueArray;
}

const array1 = [1, 22, 35, 41, 68];
const array2 = [41, 35, 69, 707, 81];
const mergedAndSortedArray = bubbleSort(mergeAndRemoveDuplicates(array1, array2));
console.log(mergedAndSortedArray);
