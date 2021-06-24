/* Remove Range (from platform)
Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array). Given ([20,30,40,50,60,70],2,4), change to [20,30,70] and return it.
*/

/* 
One way to approach this:
Example:
    [20, 30, 40, 50, 60, 70, 80, 90, 100], removing items from indices 2-4
    [20, 30, 70, 50, 60, 70, 80, 90, 100] // Move item at index 5 to index 2 (offset of 3 = 4 - 2 + 1)
    [20, 30, 70, 80, 60, 70, 80, 90, 100] // Move index 6 to index 3
    [20, 30, 70, 80, 90, 70, 80, 90, 100]
    [20, 30, 70, 80, 90, 100, 80, 90, 100]
    Remove the last 3 items - duplicated
    [20, 30, 70, 80, 90, 100]
*/
function removeRange(arr, startInd, endInd) {
    // Truncate indices
    endInd = Math.floor(endInd);
    startInd = Math.floor(startInd);
    // If indices are out of bounds, change them so that they are at the end or start, respectively
    if (endInd > arr.length - 1) {
        endInd = arr.length - 1;
    }
    if (startInd < 0) {
        startInd = 0;
    }
    var rangeInd = endInd - startInd + 1;
    // Loop to move items to the left
    for (var k = endInd+1; k < arr.length; k++) {
        arr[k - rangeInd] = arr[k];
    }
    arr.length -= rangeInd; // Shorten length by number of items removed
}

var myArr = [20, 10, 50, 80, 30, 50, 20, 40];

removeRange(myArr,0,5);
console.log(myArr);