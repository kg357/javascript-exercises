
const palindromes = function (text) {

    let reversedText = removePunctuationsAndSpaces(
        text.toLowerCase().split(""))
        .reverse().join("");

    let cleanText = removePunctuationsAndSpaces(
        text.toLowerCase().split("")).join("");

    return cleanText === reversedText ? true : false;
    
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
