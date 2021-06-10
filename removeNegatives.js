// From the office hour on June 9, 2021

// Remove Negatives
// Implement removeNegatives() that accepts an array, removes negative values, and returns the same array (not a copy), preserving non-negatives’ order. As always, do not use built-in array functions.

// [4, 8, -3, -5, 7, 2, -1, 10, -5.5, 11, 0, 3] -> [4, 8, 7, 2, 10, 11, 0, 3]
// Find -3: [4, 8, -5, 7, 2, -1, 10, -5.5, 11, 0, 3, 3]

// [4, 8, -5, 7, 2, -1, 10, -5.5, 11, 0, 3, 3]

/*
1. Look through each value in the array.
2. If we find a negative value, we'll move all the numbers to the right forward an index (i.e. to the left).
3. Remove the last value from the array.
*/

function removeNegatives(arr) {
    // Loop through the array
    for (var i = 0; i < arr.length; i++) {
        // If value is negative...
        if (arr[i] < 0) {
            // Loop to move the values up
            for (var j = i + 1; j < arr.length; j++) {
                arr[j-1] = arr[j];
            }
            arr.length--; // Decrement the length of the array by 1, removing the last value
            i--; // Ensures that we don't move on to the next INDEX - the next VALUE is at the CURRENT index because all the values to the right get moved up; otherwise we skip the next value
        }
    }
}

var myArr = [-2, -5, 4, 8, -3, -5, 7, 2, -1, 10, -5.5, 11, 0, 3, -10, -15];
removeNegatives(myArr);
console.log(myArr);

// Demonstrating that you can change the length of the array at will
var x = [1, 3, 5];
x.length = 5; // Expand array
console.log(x);
x.length = 2; // Shorten array
console.log(x);