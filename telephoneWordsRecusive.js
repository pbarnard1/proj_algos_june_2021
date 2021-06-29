/*
Telephone Words - from To Do 4 in recursion
Nikki has a new phone number (304-5083) and wants to create a clever way for everyone to remember it. On older telephones, the keypad associates letters with each numeral. Given a seven-digit telephone number, return an array of all possible strings that equate to that phone number. For reference, here is the mapping: [2:ABC; 3:DEF; 4:GHI; 5:JKL; 6:MNO; 7:PQRS; 8:TUV; 9:WXYZ] – for completeness, map 1 to I and zero to O. 

For example, given a phone number 818-2612, return an array of 243 different strings, including “vitamic” and “titania”.

*/

function telephoneWords(phoneStr) {
    var phoneMap = {
        '0': 'O',
        '1': 'I',
        '2': 'ABC',
        '3': 'DEF',
        '4': 'GHI', 
        '5': 'JKL', 
        '6': 'MNO', 
        '7': 'PQRS', 
        '8': 'TUV', 
        '9': 'WXYZ'
    }
    var phoneCombos = []; // Array that will hold all the combinations of letters for the phone number, like "VITAMIC" and "TITANIA" for the phone string "818-2612"
    // Recursive function that will build this array
    // 0 = starting index for building each string
    rTelephoneWords(phoneStr, phoneCombos, phoneMap, 0, "");
    return phoneCombos;
}

/* Recursive helper function: 
phoneStr = original string passed in;
allPhoneCombos = array of words built; this will change size accordingly
phoneMap = object (hash map) containing how to map digit to each possible letter
curInd = current index of string we're examining
builtWordSoFar = string containing the word as it's been built so far
*/
function rTelephoneWords(phoneStr, allPhoneCombos, phoneMap, curInd, builtWordSoFar) {
    // Base case, where the recursion ends:
    if (curInd >= phoneStr.length) { // If past the end of the string
        allPhoneCombos.push(builtWordSoFar); // Push word we've built into the array
        return; // End the recursion so we skip the code below; don't need to return array since it's changing value
    }
    var curDigit = phoneStr[curInd]; // Get current character we're looking at
    // Check to see if current character is actually a digit from 0-9
    if (phoneMap[curDigit] == undefined) { // If not a number, examples: "-", "(", ")", just move on
        rTelephoneWords(phoneStr, allPhoneCombos, phoneMap, curInd+1, builtWordSoFar);
    } else { // Number found (0-9)
        var allLettersForDigit = phoneMap[curDigit];
        // Loop through all possible letters for this digit, then recursively build word
        for (var k = 0; k < allLettersForDigit.length; k++) {
            rTelephoneWords(phoneStr, allPhoneCombos, phoneMap, curInd+1, builtWordSoFar+allLettersForDigit[k]);
        }
    }
}

console.log(telephoneWords("456"));