var tShirtPrice = 200;
var tShirtPrice2 = '200';
var isRaining = true;
var isRomantic;
// console.log(typeof tShirtPrice);
// console.log(typeof tShirtPrice2);
// console.log(typeof isRaining);
// console.log(isRomantic);

var today = new Date();
console.log(typeof today);

//special edition
var firstNumber = 0.1;
var secondNumber = 0.2;
var total = firstNumber + secondNumber;
console.log(total); //js shows the vale = 0.30000000000000004
console.log(parseFloat(total.toFixed(1))); //toFixed function sets the amount of digit after . but shows String values that's why parseFloat has used now the value is 0.3
