// 1. Convert the string "258.90" to: (a) integer, (b) floating number. Store in two variables.
// a
var x = parseInt("258.90");
console.log(typeof x); // number
// b
var y = parseFloat("258.90");
console.log(typeof y); // number

//

// 2. Format the number 7.45678 to exactly 2 decimal places (string) then convert it back to a number.

var x2 = 7.45678;
y = x2.toFixed(2);
y = Number(y);
console.log(y, typeof y); // 7.46 'number'
// or
x2 = 7.45678;
y = x.toPrecision(3);
y = Number(y);
console.log(y, typeof y); // 7.46 'number'

//

// 3.Check if the value 'abc' is NaN. Also show a case where isNaN returns false for a non-number.
console.log(isNaN("abc")); // true
var x3 = null;
console.log(isNaN(x3)); // false
console.log(isNaN("123")); // false

//

// 4. Floating point: Show that (0.1 + 0.2) != 0.3. Produce a corrected decimal string with exactly 1 decimal place using toFixed.
console.log(0.1 + 0.2 === 0.3); // false
console.log((0.1 + 0.2).toFixed(1)); // 0.3
console.log(Number((0.1 + 0.2).toFixed(1)) == 0.3); // true
//

// 5. Write a function to safely parse a string that may contain trailing text (e.g. "120px") returning the integer part or null if it starts with non-digit.
function safelyParsing(x5) {
  var firstChar = String(x5).charAt(0);
  if (firstChar < "0" || firstChar > "9") return null;
  else return parseInt(x5);
}
console.log(safelyParsing("120px")); // 120

// 6.Implement isFiniteNumber(value) that returns true only for finite numeric values (reject numeric strings, Infinity, NaN, null, etc.) WITHOUT using Number.isFinite. Provide 4 passing and 4 failing test examples (comment)
function isFiniteNumber(value) {
  if (typeof value != "number") return false;
  else if (Number.isNaN(value) || value === Infinity || value === -Infinity)
    return false;
  else return true;
}
console.log(isFiniteNumber("56")); // false
console.log(isFiniteNumber(NaN)); // false
console.log(isFiniteNumber(1.2)); // true
console.log(isFiniteNumber(-Infinity)); // false

//

// 7. Remove leading and trailing spaces from the string "   hello world  ".
console.log("   Hello World   ".trim()); // "Hello world"

//

// 8. Get the substring "script" from "javascript" using two different methods (slice + substring).
console.log(
  "JavaScript".slice("JavaScript".indexOf("Script"), "JavaScript".length)
); // Script

console.log(
  "JavaScript".substring("JavaScript".indexOf("Script"), "JavaScript".length)
); // Script

//

// 9. Count how many times the letter 'a' appears in "Banana Mania" (case-insensitive).
var arr9 = "Banana Mania".split("");
console.log(arr9);
var count9 = 0;
arr9.forEach((element) => {
  if (element.toLowerCase() == "a") count9++;
});
console.log(count9);

//

// 10. Write a function reverseString(s) without using array reverse (iterate backwards).
function reverseString(s) {
  var reversed = "";
  for (i = s.length - 1; i >= 0; i--) reversed += s[i];
  return reversed;
}
console.log(reverseString("Hello world")); // dlrow olleH

function reverseString2(s) {
  var reversed = [];
  for (i = s.length - 1; i >= 0; i--) reversed.push(s[i]);
  return reversed.join("");
}
console.log(reverseString2("Hello world")); // dlrow olleHdlrow olleH

//

// 11. Write a function capitalizeWords(sentence) that turns "hello there friend" into "Hello There Friend".
function capitalizeWords(sentence) {
  var result = "";
  for (var i = 0; i < sentence.length; i++) {
    if (i == 0) result += sentence[i].toUpperCase();
    else if (sentence[i] === " ") {
      result += sentence[i].toUpperCase();
      i++;
      result += sentence[i].toUpperCase();
    } else result += sentence[i];
  }
  return result;
}
console.log(capitalizeWords("hello there friend")); // Hello There Friend.

//

// 12. Extract the domain (without protocol and path) from a URL string like "https://example.com/path/to/page" (result: example.com) using indexOf + slice.
var str12 = "https://example.com/path/to/page";
console.log(str12.slice(str12.indexOf("://") + 3, str12.indexOf(".") + 4)); // example.com

// or
var start12 = str12.indexOf("://") + 3;
var end12 = str12.indexOf("/", start12);
console.log(str12.slice(start12, end12)); // example.com

//

//13. Implement a simple substring search function naiveIndexOf(haystack, needle) that returns first index or -1 (do not call built-in indexOf inside the loop).
function naiveIndexOf(haystack, needle) {
  var str13 = "";
  for (var i = 0; i <= haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      var counter13 = 0;
      for (var j = i; j < needle.length + i; j++) {
        if (haystack[j] === needle[counter13]) {
          str13 += haystack[j];
          counter13++;
        } else {
          str13 = "";
          break;
        }
      }
      if (str13 === needle) return i;
    }
  }
  return -1;
}
console.log(naiveIndexOf("Hello Mahmoud Saadallah", "allah")); // 18
console.log(naiveIndexOf("Hello Mahmoud Saadallah", "Saad")); // 14

//

// 14. Buggy code: var s = 'hello'; if (s.toUpperCase = 'HELLO') { console.log('match'); }  // Fix and explain issue.
var s = "hello";
if (s.toUpperCase() === "HELLO") {
  console.log("match");
}
// The issue is .toUpperCase is a function not a porperty, so we need to use () to call the function.
// Also we need to use == or ===instead of = to compare strings.

//

// 15. Create an array of the numbers 1..5, then push 6 and unshift 0.
var arr15 = [1, 2, 3, 4, 5];
arr15.push(6);
arr15.unshift(0);
console.log(arr15); // [0, 1, 2, 3, 4, 5, 6]

//

// 16. Remove the last element and store it. Remove the first element and store it.
var x16 = arr15.pop();
var y16 = arr15.shift();
console.log(x16, y16);

//

// 17. Use slice to copy the first 3 elements of [10,20,30,40,50] into a new array.
var arr17 = [10, 20, 30, 40, 50];
var newarr17 = arr17.slice(0, 4);
console.log(newarr17); // [10, 20, 30, 40]

//

//18. Use splice on [1,2,3,4,5] to remove 3 and 4 and insert 'a','b'. Result should be [1,2,'a','b',5].

var arr18 = [1, 2, 3, 4, 5];
arr18.splice(2, 2, "a", "b");
console.log(arr18); // [1, 2, 'a', 'b', 5]

//

// 19. Demonstrate the difference between slice and splice on the same starting array (show original after each).

var arr19 = [1, 2, 3, 4, 5, 6];
// slice() used to shadow copy the array without modifing it, or to retrive specific range from the array.
var newarr19 = arr19.slice(1, 4);
console.log(newarr19); // [2, 3, 4]
console.log(arr19); // [1, 2, 3, 4, 5, 6]   // nothing change in the orginal array.

// splice(): used to remove or replace spcific elements in the array(modify the orignal array).
arr19.splice(3, 2, 7, 8);
console.log(arr19); // [1, 2, 3, 7, 8, 6]   // The orignal array has been modified.

//

// 20. Create a sparse array by assigning index 7 on a fresh [] then log length.
var arr20 = [];
arr20[7] = "sparse";
console.log(arr20.length); // 8

//

// 21. Write a function compact(array) that returns a new array without falsy values (manual loop, no filter).
function compact(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) result.unshift(array[i]);
  }
  return result;
}
