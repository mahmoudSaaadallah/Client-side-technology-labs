var myName = "Mahmoud";
console.log(myName); // Mahmoud

if (true) {
  console.log(myName); // Mahmoud
  var newName = "Essam";
}
console.log(newName); // Essam

function fun() {
  var thirdName = "Omar";
  console.log(thirdName); // Omar
}
//console.log(thirdName); // Error because the thirdName variable is functional scope
fun();

var x;
console.log(x); // undefiened, becaue it hoisted
x = 5;
console.log(x); // 5 because it's alread initialized.

var num = 22;
console.log(typeof num); // number
var str = "Hi"; // string
var bool = true; // boolean
var und; // undefined.
var n = null;

var num2 = new Number(5);
console.log(typeof num2); // object
var str2 = new String("Hi");
console.log(typeof str2); // object
var bool2 = new Boolean(false);
console.log(typeof bool2); // object

var n = NaN;
console.log(n); // NaN
if (isNaN(n)) {
  console.log(true); // true
}

console.log(5 / 2); // 2.5

var x = "123";
x = parseInt(x);
console.log(typeof x); // number

function convertToString(x) {
  return !Number.isNaN(Number(x));
}
console.log(convertToString("123a")); // false

var counter = 1;
while (counter <= 20) {
  console.log(counter);
  counter++;
}
var counter = 0;
do {
  var input = prompt("Enter number. Enter 0 to exit.");
  counter += Number(input);
} while (input != 0);
console.log(counter);

var input = prompt("Ener a number from 1 to 7.");
switch (Number(input)) {
  case 1:
    console.log("Satarday");
    break;
  case 2:
    console.log("Sunday");
    break;
  case 3:
    console.log("Monday");
    break;
  case 4:
    console.log("Tuesday");
    break;
  case 5:
    console.log("Wenisday");
    break;
  case 6:
    console.log("Thirsday");
    break;
  case 7:
    console.log("Firday");
    break;
}
