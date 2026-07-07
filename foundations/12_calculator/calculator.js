const add = function(num1, num2) {
  return num1+num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(nums) {
	let total = nums.reduce(function(total, num){
    total = num + total;
    return total;
  }, 0);

  return total;
};

const multiply = function(nums) {
  let product = nums.reduce(function(product, num){
    product = product * num;
    return product;
  }, 1);

  return product;
};

const power = function(base, exponent) {
  return base ** exponent;
};

const factorial = function(num) {
  let product = 1;
  for(let i = num; i > 0; i--) {
    product = product * i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
