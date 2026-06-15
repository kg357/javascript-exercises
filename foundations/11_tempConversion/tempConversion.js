const convertToCelsius = function (fahrenheitTemp) {

  let celsiusTemp = (fahrenheitTemp - 32) * 5/9;

  let roundedCelsiusTemp = Math.round(
    celsiusTemp * 10) / 10;

  return roundedCelsiusTemp;


};

const convertToFahrenheit = function (celsiusTemp) {


  let fahrenheightTemp = (celsiusTemp * 9 / 5) + 32;

  let roundedFahrenheightTemp = Math.round(
    fahrenheightTemp * 10) / 10;

  return roundedFahrenheightTemp;

};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
