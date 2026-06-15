
// Use map, filter, or reduce

const removeFromArray = function (arr, ...numsToRemove) {


    let filteredList = arr.filter(
        element => !numsToRemove.includes(element));

    // return arr
    return filteredList;

};


// console.log(removeFromArray([1, 2, 3, 4], 3));


// Do not edit below this line
module.exports = removeFromArray;
