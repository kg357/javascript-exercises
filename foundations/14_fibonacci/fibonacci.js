const fibonacci = function (num) {

    num = +num;

    let fib = [1, 1];

    switch (num) {
        case 0: return 0;
        case 1: return 1;
        case 2: return 1;
        case 3: return 2;
    }

    if (num < 0) {
        return "OOPS";
    }


    for (let i = 0; i <= num - 3; i++) {
        fib[i + 2] = fib[i] + fib[i + 1];

    }
    return fib[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
