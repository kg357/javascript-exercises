/*
Idea: understand the problem, plan/pseudocode, divide and con9uer,
      and test


      Leap years:
      - divisible by 4
      - divisible by 100 and 400
      - if only divisible by 100 and not 400 then not leap year
*/

// 


const leapYears = function (year) {

    // if its divisible by 4 then check to see if its divisible by 100

        // if yes  then check to see if its divisble by 400 

            // if yes then is a leap year
            // if no then it is not a leap year

        // if no then it is a leap year

    let isDivisibleBy4 = year % 4 === 0;
    let isDivisibleBy400 = year % 400 === 0;
    let isDivisibleBy100 = year % 100 === 0;


    if (isDivisibleBy4) {

        if (isDivisibleBy100) {

            if (isDivisibleBy400) {
                return true;
            } else {
                return false;
            }

        } else {
            return true;
        }

    } else {
        return false;
    }


};




// Do not edit below this line
module.exports = leapYears;
