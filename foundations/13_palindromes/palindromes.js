
const palindromes = function (text) {

    let copy = text.toLowerCase();
    let splitCopy = copy.split("");

    let filteredCopy = removePunctuationsAndSpaces(splitCopy);

    let reversedList = filteredCopy.reverse();
    let reversedText = reversedList.join("");
    let splitText = text.toLowerCase().split("");

    let filteredText = removePunctuationsAndSpaces(splitText);

    let cleanText = filteredText.join("");
    if (cleanText === reversedText) {
        return true;
    } else {
        return false;
    }

};

function removePunctuationsAndSpaces(characters) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let filteredList = characters.filter(function (character) {
        return alphanumerical.includes(character);
    });
    return filteredList;
}


// Do not edit below this line
module.exports = palindromes;
