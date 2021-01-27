function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;                       //Assume current index is minimum val in array
    for (let j = i; j < array.length; j++) { //j starts from i as everything before is already sorted, only looking at remaining subarray
      if (array[j] < array[minIndex]) {
        minIndex = j;                       //Set new (local, ie sub-array) minimum if one is found
      };
    };
    //Swap in place, using ES6 array destructuring. Otherwise use a swap function
    [array[i], array[minIndex]] = [array[minIndex], array[i]]; 
  }
  return array;
}

selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);

//O(x^2) quadratic in all cases