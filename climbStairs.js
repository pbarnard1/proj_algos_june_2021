function climbSteps(steps) {
    /*
    What do we need to keep track of?
    Number of steps remaining to this point
    What steps (1 or 2) we've taken to climb the staircase
    Track all combinations we've made so far
    BASE CASE(S) - when would we stop: 
    number of steps remaining < step size chosen (basically 0)
    Push the combo we've found once we reach base case
    */

    steps = Math.floor(steps); // Ensures no decimal piece
    var allStepCombos = []; // Will hold all step combinations (e.g. [1, 2, 1])
    rClimbSteps(steps,[],allStepCombos);
    return allStepCombos;
}

function rClimbSteps(stepsLeft, stepsTakenArr, allStepCombos) {
    // Base case - reached top of staircase (also accounts for weird edge case of a negative step value)
    if (stepsLeft <= 0) {
        allStepCombos.push(stepsTakenArr);
        return; // Exit the recursion
    } else { // At least one step left
        // [...stepsTakenArr, 1] // Makes a new array using the spread operator "..."
        // Take a single step
        rClimbSteps(stepsLeft-1, [...stepsTakenArr, 1], allStepCombos);
        // Take 2 steps - but only if you have at least 2 steps left
        if (stepsLeft >= 2) {
            rClimbSteps(stepsLeft-2, [...stepsTakenArr, 2], allStepCombos);
        }
    }
}

console.log(climbSteps(15));