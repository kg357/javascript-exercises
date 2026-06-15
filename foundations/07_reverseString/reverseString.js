/*
Idea: understand the problem, plan/pseudocode, divide and con9uer,
      and test
*/



const reverseString = function(str) {

    // make the string an array
    let wordArray = str.split("");

    // create a new reversed array variable
    let reversedArray = [];

    // loop through array, starting from the end
    for(let i = wordArray.length-1; i >= 0; i--) {

        // add to new reversed array
        reversedArray.push(wordArray[i]);

    }

    // join the array into a string
    let reversedWord = reversedArray.join("");

    // return the reversed word
    return reversedWord;

};

console.log(reverseString('hello there'));


// Do not edit below this line
module.exports = reverseString;
