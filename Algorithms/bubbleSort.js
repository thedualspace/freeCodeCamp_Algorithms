//Uses multiple function declarations. See selectionSort.js for ES6 array destructuring syntax.
function swap(a,b,arr) {
    let tmp = arr[b];
    arr[b] = arr[a];
    arr[a] = tmp;
}

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j+1] < array[j]) {
          swap(j, j+1, array);
        }
      }
    }
    return array;
}
  
console.log(bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));

//O(x^2) time complexity in average and worst cases