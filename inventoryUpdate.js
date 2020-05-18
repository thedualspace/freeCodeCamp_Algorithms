//Given a current inventory, and a delivery of items, return the updated inventory after all delivery items have been added.
//Currently not alphabetical. Requires implementation of insertion sort.

function updateInventory(currentInv, deliveryInv) {
    let updatedArray = currentInv
    for (let i = 0; i < deliveryInv.length; i++) {
        for (let j = 0; j < currentInv.length; j++) {
            if (currentInv[j][1] === deliveryInv[i][1]) {
              updatedArray[j][0] += deliveryInv[i][0];
              break;
            } else if (j === currentInv.length - 1) {
                updatedArray.push(deliveryInv[i]);
                break;
            }
        }
    }
    return updatedArray;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"], 
    [2, "Dirty Sock"], 
    [1, "Hair Pin"], 
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"], 
    [3, "Half-Eaten Apple"], 
    [67, "Bowling Ball"], 
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));
