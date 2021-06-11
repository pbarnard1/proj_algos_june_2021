/* Efficient implementation of removing duplicates from a sorted array: */

function removeDuplicates(arr) {
    if (arr.length <= 1) { // If empty or only has one element, don't bother - no duplicates possible
        return;
    }
    var storageIndex = 1; // Index for where we will store nonduplicate values
    var oldValue = arr[0]; // Value to compare against to see if we have a duplicate
    // Loop through remainder of the array
    for (var k = 1; k < arr.length; k++) {
        // If the value is new (not a duplicate)
        if (arr[k] != oldValue) {
            arr[storageIndex] = arr[k];
            oldValue = arr[k];
            storageIndex++; // Move index down for next possible non-duplicate value
        }
    }
    arr.length = storageIndex; // Cut off values at end, leaving only the non-duplicates
}

var myArr = [1, 1, 2, 2, 2, 2, 3, 4, 8, 11, 14, 17, 17, 20, 23, 23, 30];
console.log(myArr);
removeDuplicates(myArr);
console.log(myArr);

var myArr2 = [5, 5, 5, 5, 5];
console.log(myArr2);
removeDuplicates(myArr2);
console.log(myArr2);