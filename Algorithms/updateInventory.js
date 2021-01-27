//Given a current inventory, and a delivery of items, return the updated inventory after all delivery items have been added.

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newDel = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

function updateInventory(Inventory, Delivery) {
  /* 
  Begin by sorting both arrays. This will reduce the number of comparisons we must make 
  { twice O(nlogn) to sort then O(n+m) to compare, 
  vs. O(nm) to bruteforce compare then O(nlogn) to sort output },
  and will ensure our output array is already sorted.

  Note .splice is worst case O(n) if splicing into start of array, 
  but depends on index of array being spliced.

  Sorting performed by .localeCompare String method
  */
  
  const sortedInv = Inventory.sort(
      function(a, b) {
          return a[1].localeCompare(b[1])
      }
  ); 

  const sortedDel = Delivery.sort(
      function(a, b) {
          return a[1].localeCompare(b[1])
      }
  );  

  //Empty inventory or delivery edge cases handled appropriately.
  if ( sortedInv.length === 0 ) {
      return sortedDel;
  } else if ( sortedDel.length === 0 ) {
      return sortedInv;
  }


  /*
  We want to make sure that our inner loop for inventory (indexed by j) doesnt start
  over every time our outer loop (indexed by i) completes, because both 
  our lists are sorted so we can save time. O(nm) vs O(n+m) I think.
  */
  let j = 0;
  
  for (let i = 0; i < sortedDel.length; i++) {
      while ( j < sortedInv.length ) {
          const nameComparison = sortedDel[i][1].localeCompare(sortedInv[j][1]);

          if (nameComparison === 0) { //Item exists in inventory already, add quanitity
              sortedInv[j][0] = sortedInv[j][0] + sortedDel[i][0];
              j += 1;
              break;
          } else if (nameComparison < 0) { //New item is inserted in alphabetical order
              sortedInv.splice(j, 0, sortedDel[i]);
              j += 1;
              break;
          } else if (j === sortedInv.length - 1 ){ //End of list, no more comparisons left, insert at end
              sortedInv.push( sortedDel[i] );
              j += 1;
              break;
          }
          
          j += 1; //Item should be sorted later than current index. Iterate forward.
      }
  }

  return sortedInv
};

console.log(updateInventory(curInv, newDel));
