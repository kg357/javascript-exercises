const repeatString = function(str, num) {

    if(num<0) {
        return 'ERROR';
    } else {

        // loop the word num number of times

        let i = 1;

        let repeatedWord = "";

        while(i <= num) {

            repeatedWord = repeatedWord.concat(str);

            i++;
        }

        return repeatedWord;
    }
};


// Do not edit below this line
module.exports = repeatString;
