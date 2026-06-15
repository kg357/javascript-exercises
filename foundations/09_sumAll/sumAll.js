const sumAll = function (num1, num2) {

    // ensure both arguments are numbers, no decimals
    // and no negative numbers

    if (Number.isInteger(num1) && Number.isInteger(
        num2) && num1 >= 0 && num2 >= 0) {

        // find the lower number and store in variable

        let smallerNumber = Math.min(num1, num2);

        // find the higher number and store in variable
        let largerNumber = Math.max(num1, num2);

        // create a variable that calculates the total
        let sum = 0;

        // loop through lower to higher number
        for (let i = smallerNumber; i <= largerNumber; i++ ) {

            // add each number
            sum += i;

        }

        // return the sum
        return sum;

    } else {
        return "ERROR";
    }


};

// Do not edit below this line
module.exports = sumAll;
