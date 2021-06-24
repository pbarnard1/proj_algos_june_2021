// EXAMPLE 1: Print a countdown from n to 0

// Non-recursive version
function countdown(n) {
    for (var i = n; i >= 0; i--) {
        console.log(i);
    }
}

countdown(10);

// With recursion
function rCountdown(n) {
    // Base case: condition that ends the recursion - usually you'll return a value or push/pop something onto an array/object
    if (n < 0) {
        return;
    }
    console.log(n);
    rCountdown(n-1); // Recursive step: notice that the value changes - this is where you make forward progress
}

rCountdown(10);

// EXAMPLE 2: Find the max value of an array

// Non-recursive version
function findMax(arr) {
    var maxVal = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > maxVal) {
            maxVal = arr[i];
        }
    }
    return maxVal;
}
console.log(findMax([3, 11, 5, 7, 4, 6]));

// Recursive version
function rFindMax(arr, ind = 0) { // Using a default value for ind
    // Base case
    if (ind == arr.length - 1) {
        console.log("End of array - recursion stops here");
        return arr[ind];
    }
    // Recursion
    console.log("Comparing value = "+arr[ind]+" at index "+ind+" to remainder of array:");
    return Math.max(arr[ind],rFindMax(arr,ind+1));
}

console.log(rFindMax([10, 4, 8, 5, 7, 3]));