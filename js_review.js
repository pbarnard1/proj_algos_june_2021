var x = 5; // Variable called x, and we're storing a value, in this case, 5
var y = true; // or false
var z = [1, 4, 5, 3, 6, true, 'Hello']; // Array
console.log(z[1]);
var z2 = [];
var s1 = 'Hello world!'; // Strings
var s2 = `Hello!`;
var s3 = "Hi!";

// Objects
var obj1 = {
    'name': 'Adrian',
    'number': 50
}

console.log(obj1); // Printing a value
console.log(obj1.name);
console.log(obj1['number']);

// Function
/* Multi-
line
comment
*/
function printArray(arr) {

    // For loop - used to accomplish the same objective - or do the same thing - a finite numbers of times 
    // k += 5 to increment k by 5, k--, k -= 3 decrements by 3
    for (var k = 0; k < arr.length; k++) {
        console.log(arr[k]);
    }

    // return some_value;
}

var myArr = [3, 8, 4, 9];
// printArray(myArr);

function maxValue(arr) {
    var maxVal = arr[0];
    for (var k = 1; k < arr.length; k++) {
        if (arr[k] > maxVal) {
            maxVal = arr[k];
        }
    }
    return maxVal;
}

var myMax = maxValue(myArr);
console.log(myMax);

// Check if two or more things are true: && (AND)
// condition_1 && condition_2

// Check if ONLY one is true: || (OR)
// condition_1 || condition_2

// Other useful functions with arrays:

myArr.push(10); // Adds a value to the end of the array
var y5 = myArr.pop(); // Removes the last item in the array

