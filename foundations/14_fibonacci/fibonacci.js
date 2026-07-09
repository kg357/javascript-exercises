const fibonacci = function (num) {

    let count = +num;

    if (count < 0) return "OOPS";
    if (count === 0) return 0;

    let fib = [1, 1];

    for (let i = 2; i <= count; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];

    }
    return fib[count-1];
};

// Do not edit below this line
module.exports = fibonacci;
