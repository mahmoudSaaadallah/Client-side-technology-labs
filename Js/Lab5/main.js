// 1. Predict (in comments) the output order of this code, then run to verify.
// console.log(a());
// var b = function () {
//   return "B";
// };
// function a() {
//   return "A";
// }
// console.log(b());
//    After verifying, explain (one short line) why a works before definition and b does not.
// Output:
// "A"
// "B"
// Function declarations (a) are hoisted with their definitions while function expressions (b) are hoisted as undefined.

// 2. Rewrite a function declaration sum(a,b) into a function expression stored in a variable named add and confirm both produce same result for (3,4).
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(3, 4)); // output 7
// var add = function(a, b) {
//   return a + b;
// };

// console.log(add(3, 4)); // output 7

// 3. Create a named function expression assigned to var factorial. Use the internal name ONLY for recursion. Log factorial(5). Show (comment) that the internal name is not global.

// var factorial = function fact(n) {
//   if (n <= 1) return 1;
//   return n * fact(n - 1);
// };

// console.log(factorial(5)); // output 120
// The internal name 'fact' is not global
// if apply  console.log(fact(5)); //  ReferenceError: fact is not defined

// 4. Write a function showInfo that logs arguments.length and each argument. Call it with 0, then 2, then 5 arguments.

// function showInfo() {
//   console.log("Number of arguments:", arguments.length);
//   for (let i = 0; i < arguments.length; i++) {
//     console.log(`Argument ${i}:`, arguments[i]);
//   }
// }

// showInfo();

// showInfo("Mohamed", 25);

// showInfo("Mohamed", 25, true, null, [10, 50]);

// 5. Write a function mutate(x,y) that changes x and y inside and shows arguments[0] / arguments[1] before and after. Explain result in a comment.

// function mutate(x, y) {
//   console.log("Before :");
//   console.log("arguments[0]:", arguments[0], "arguments[1]:", arguments[1]);
//   x = x * 2;
//   y = y + " changed";

//   console.log("After :");
//   console.log("arguments[0]:", arguments[0], "arguments[1]:", arguments[1]);
// }

// mutate(5, "hello");

// 6. Implement sumAll() using only the arguments object (no arrays) to total all numeric arguments. Test sumAll(2,5,3) and sumAll().

// function sumAll() {
//   let total = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     if (typeof arguments[i] === "number") {
//       total += arguments[i];
//     }
//   }
//   return total;
// }

// console.log(sumAll(2, 5, 3));
// console.log(sumAll());

// 7.  Implement sumAll() using only the arguments object but with the Array method reduce.

// function sumAll() {
//     return Array.prototype.reduce.call(arguments, (total, curr) => {
//         return typeof curr === "number" ? total + curr : total;
//     }, 0);
// }

// console.log(sumAll(12, 9, 3));
// console.log(sumAll(1,2));

// 8. Write describeValue that returns different strings based on number of args: 0 -> 'none', 1 -> 'one:'+val, 2 -> 'two:'+a+','+b else 'too many'.

// function describeValue() {
//   if (arguments.length === 0) {
//     return "none";
//   } else if (arguments.length === 1) {
//     return "one:" + arguments[0];
//   } else if (arguments.length === 2) {
//     return "two:" + arguments[0] + "," + arguments[1];
//   } else {
//     return "too many";
//   }
// }

// console.log(describeValue());
// console.log(describeValue(42));
// console.log(describeValue(1, 2));
// console.log(describeValue(1, 2, 3));

// 9. Create an array funcs of three small anonymous functions that transform a number. Apply them in order to start = 10 (loop). Log final result.

// const funcs = [
//   function (n) {
//     return n + 5;
//   },
//   function (n) {
//     return n * 2;
//   },
//   function (n) {
//     return n - 3;
//   },
// ];

// let start = 10;

// for (let i = 0; i < funcs.length; i++) {
//   start = funcs[i](start);
// }

// console.log(start);

// 10. Write makeMultiplier(factor) returning a function(n) that multiplies. Create double and triple; test with 7.

// function makeMultiplier(factor) {
//   return function (n) {
//     return n * factor;
//   };
// }

// const double = makeMultiplier(2);
// const triple = makeMultiplier(3);

// console.log(double(7));
// console.log(triple(7));

// 11. Implement once(fn) runs fn only first time, returns its return value. Test with a function that logs and returns a string.

// function once(fn) {
//   let called = false;
//   let result;
//   return function (...args) {
//     if (!called) {
//       called = true;
//       result = fn(...args);
//     }
//     return result;
//   };
// }

// function greet() {
//   console.log("Function is running");
//   return "Hello!";
// }

// const greetOnce = once(greet);

// console.log(greetOnce());
// console.log(greetOnce());
// console.log(greetOnce());

// 12. (Bonus) Modify once so subsequent calls return the FIRST result (like a memo of zero-arg function). Keep original version comment above for comparison.
// function once(fn) {
//   let called = false;
//   let result;
//   return function () {
//     if (!called) {
//       called = true;
//       result = fn();
//     }
//     return result;
//   };
// }

// function randomString() {
//   console.log("Function runs");
//   return Math.random().toString(36).substring(2, 8);
// }

// const getOnce = once(randomString);

// console.log(getOnce());
// console.log(getOnce());
// console.log(getOnce());

// 13. (Bonus) Implement makeCounter(start) that returns { inc: fn, dec: fn, value: fn }. State stays private. Demonstrate two independent counters.

// function makeCounter(start = 0) {
//   let count = start;

//   return {
//     inc: function () {
//       count++;
//       return count;
//     },
//     dec: function () {
//       count--;
//       return count;
//     },
//     value: function () {
//       return count;
//     },
//   };
// }

// const counterA = makeCounter(5);
// const counterB = makeCounter(100);

// console.log(counterA.value());
// console.log(counterA.inc());
// console.log(counterA.inc());
// console.log(counterA.dec());

// console.log(counterB.value());
// console.log(counterB.dec());
// console.log(counterB.inc());

// console.log(counterA.value());
// console.log(counterB.value());

// 14. makeAdder(start) returns a function that adds its argument to internal total and returns current total each call. Demonstrate separate instances.
// function makeAdder(start = 0) {
//     let total = start;
//     return function(n) {
//         total += n;
//         return total;
//     };
// }

// const adderA = makeAdder(10);
// const adderB = makeAdder(100);

// console.log(adderA(5));
// console.log(adderA(3));
// console.log(adderA(-2));

// console.log(adderB(10));
// console.log(adderB(20));

// console.log(adderA(1));
// console.log(adderB(5));

// 15. Implement memoize1(fn). Show it caches slowSquare(9) twice (timing optional comment).
// function memoize1(fn) {
//     let cached = false;
//     let result;
//     return function(arg) {
//         if (!cached) {
//             result = fn(arg);
//             cached = true;
//         }
//         return result;
//     };
// }

// function slowSquare(n) {
//     for (let i = 0; i < 1e8; i++);
//     return n * n;
// }

// const memoSquare = memoize1(slowSquare);

// console.time("First call");
// console.log(memoSquare(9));
// console.timeEnd("First call");

// console.time("Second call");
// console.log(memoSquare(9));
// console.timeEnd("Second call");

// 16. (Bonus) Implement memoizeN(fn) that supports any number of primitive args by joining them with '|' as a key. Show with add3(a,b,c).

// function memoizeN(fn) {
//     const cache = {};
//     return function(...args) {
//         const key = args.join('|');
//         if (!(key in cache)) {
//             cache[key] = fn(...args);
//         }
//         return cache[key];
//     };
// }

// function add3(a, b, c) {
//     for (let i = 0; i < 1e8; i++); // simulate slow computation
//     return a + b + c;
// }

// const memoAdd3 = memoizeN(add3);

// console.time("First call");
// console.log(memoAdd3(1, 2, 3));
// console.timeEnd("First call");

// console.time("Second call");
// console.log(memoAdd3(1, 2, 3));
// console.timeEnd("Second call");

// console.time("Different args");
// console.log(memoAdd3(2, 3, 4));
// console.timeEnd("Different args");

// 17. Make object user with name and method sayHi logging 'Hi NAME'. Call sayHi, then assign var f = user.sayHi; call f(). Explain (comment) output difference.
// const user = {
//     name: "Mohamed",
//     sayHi: function() {
//         console.log("Hi " + this.name);
//     }
// };

// user.sayHi();

// const f = user.sayHi;
// f();
// When called as user.sayHi() this refers to the user object.
// When called as f() this is not bound to user is undefined.

// 18. Re-use sayHi but call it with another object { name: 'Sara' } using two different ways.
// const user = {
//     name: "Mohamed",
//     sayHi: function() {
//         console.log("Hi " + this.name);
//     }
// };

// const anotherUser = { name: "Mostafa" };

// user.sayHi.call(anotherUser);
// user.sayHi.apply(anotherUser);

// 19. Create greeter.greet(greeting,sign). Use apply to invoke it on { name: 'Ali' } with 'Hello','!'.

// const greeter = {
//     greet: function(greeting, sign) {
//         console.log(greeting + " " + this.name + sign);
//     }
// };

// const person = { name: "Ali" };

// greeter.greet.apply(person, ["Hello", "!"]);

// 20. Bind greet to { name:'Lara' } as greetLara (no preset greeting). Call with different greetings.
// const greeter = {
//     greet: function(greeting, sign) {
//         console.log(greeting + " " + this.name + sign);
//     }
// };

// const greetLara = greeter.greet.bind({ name: "Lara" });

// greetLara("Hi", "!");
// greetLara("Hello", "!!");

// 21. Bind greet to produce a sayHello(obj) that always uses greeting 'Hello' but variable sign(!,*,!!,<#).

// const greeter = {
//     greet: function(greeting, sign) {
//         console.log(greeting + " " + this.name + sign);
//     }
// };

// function sayHello(obj) {
//     return greeter.greet.bind(obj, "Hello");
// }

// const aliHello = sayHello({ name: "Ali" });

// aliHello("!");
// aliHello("*");
// aliHello("!!");
// aliHello("<#");

// 22. Use slice inside a function to convert its arguments(remember it is an array like) to a real array and log reversed copy without mutating original.
// function reverseArgs() {
//   const argsArray = Array.prototype.slice.call(arguments);
//   const reversed = argsArray.slice().reverse();
//   console.log(reversed);
// }

// reverseArgs(1, 2, 3, 4);
// reverseArgs("a", "b", "c");

// 23. Given arr = [5,2,11,7] find max WITHOUT loop using max(). Then show an alternative with a loop.
// const arr = [5, 2, 11, 7];

// const max1 = Math.max(...arr);
// console.log(max1);

// let max2 = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max2) max2 = arr[i];
// }
// console.log(max2);

// 24. Demonstrate calling Math.max with individual numbers using call and explain why apply is better.
// console.log(Math.max.call(null, 5, 2, 11, 7));

// console.log(Math.max.apply(null, [5, 2, 11, 7]));

// apply lets me pass an array directly is easier for numbers in an array.

// 25. Convert string concatenation 'User: '+name+' Age: '+(age+1) into a template literal equivalent.
// const name = "Ali";
// const age = 25;

// const result = `User: ${name} Age: ${age + 1}`;
// console.log(result);

// 26. Create a multi-line template with variables title and body and log it; show classical \n build version for contrast.
// const title = "Hello";
// const body = "This is a message.";
// const message1 = `${title}
// ${body}`;
// console.log(message1);
// const message2 = title + "\n" + body;
// console.log(message2);

// 27. Write a block with var i and let j inside if(true) and log both inside and outside. Comment which leaks.
// if (true) {
//     var i = 10;
//     let j = 20;
//     console.log(i);
//     console.log(j);
// }

// console.log(i); // 10
// console.log(j); // Error

// var i is function scope while let j does not this is block scope
// 28. Write code that tries to log x before let x = 5;.
// console.log(x);
// let x = 5; //error x not initialized later

// 29. Show that pushing to a const array works but reassigning it does not (comment error you would get if attempted—do not actually break execution).
// const arr = [1, 2, 3];

// arr.push(4);
// console.log(arr);
// arr = [9, 8, 7]; // Error "Uncaught TypeError: Assignment to constant variable.".

// 30. Rewrite a normal function square(n) { return n*n; } as arrow in three forms: full body, concise, inline in map over [1,2,3].

// const square1 = (n) => {
//     return n * n;
// };
// console.log(square1(4));

// const square2 = n => n * n;
// console.log(square2(5));

// const result = [1, 2, 3].map(n => n * n);
// console.log(result);

// 31. Create object timer with count:0 and method startClassic using setInterval(function(){...}) and startArrow using setInterval(()=>{...}). Show difference in how this works (stop after a few increments using clearInterval).

// const timer = {
//   count: 0,
//   startClassic: function () {
//     const id = setInterval(function () {
//       this.count++;
//       console.log("Classic:", this.count);
//     }, 500);
//     setTimeout(() => clearInterval(id), 3000);
//   },
//   startArrow: function () {
//     const id = setInterval(() => {
//       this.count++;
//       console.log("Arrow:", this.count);
//     }, 500);
//     setTimeout(() => clearInterval(id), 3000);
//   },
// };
// timer.startClassic();

// setTimeout(() => {
//   timer.count = 0;
//   timer.startArrow();
// }, 4000);

// 32. Write an arrow function that returns an object {v:10}. Show the need for parentheses.

// const fn1 = () => {
//   v: 10;   //output undefined
// };
// console.log(fn1());

// const fn2 = () => ({ v: 10 });
// console.log(fn2()); //print object

// 33. Give one example where arrow is a bad choice (e.g., method needing dynamic this).

// const user = {
//   name: "Mohamed",
//   say: () => {
//     console.log(this.name);
//   },
// };

// user.say(); //  undefined not print anything

// 34. Start with function greet(name){ return 'Hi '+name+'!'; } Convert to arrow function using Const not let ya habeby :).
// const greet = (name) => `Hi ${name}!`;
// console.log(greet("Mohamed"));

// 35. Build pipeline functions: add2, times3, minus1 (all arrows). Write runPipeline(n, fnsArray) that loops through and applies each. Test runPipeline(5, [add2,times3,minus1]).
// const add2 = (n) => n + 2;
// const times3 = (n) => n * 3;
// const minus1 = (n) => n - 1;

// function runPipeline(n, fnsArray) {
//   let result = n;
//   for (let fn of fnsArray) {
//     result = fn(result);
//   }
//   return result;
// }
// console.log(runPipeline(5, [add2, times3, minus1]));

// 36. (write answers BEFORE running):
// var obj = {
//   n: 1,
//   inc: function () {
//     this.n++;
//     return this.n;
//   },
// };
// var inc = obj.inc;
// console.log(obj.inc()); // 2
// console.log(inc()); //NaN
// Explain both lines.
//obj.inc()=> here this refers to obj so  increase from 1 to 2 and return2.
// inc() → called as a plain function this is undefined so eturn NaN

// 37. Create many counters in a loop (e.g. 1000) and store them in an array. Comment on potential memory considerations of large closure arrays.

// function makeCounter(start = 0) {
//   let count = start;
//   return () => ++count;
// }

// const counters = [];
// for (let i = 0; i < 1000; i++) {
//   counters.push(makeCounter(i));
// }

// console.log(counters[0]());
// console.log(counters[88]());

// 38. Write safeFirst() that returns undefined if called with zero args else return array of the args.
// function safeFirst() {
//   if (arguments.length === 0) return undefined;
//   return Array.prototype.slice.call(arguments);
// }

// console.log(safeFirst()); // undefined
// console.log(safeFirst(1, 2, 3)); // [1, 2, 3]

// 39. factory(namesArray) returns object with a counter function for each name (all independent). Example: var counters = factory(['a','b']); counters.a(); counters.b();

// function factory(namesArray) {
//   const obj = {};
//   namesArray.forEach((name) => {
//     let count = 0;
//     obj[name] = () => ++count;
//   });
//   return obj;
// }

// const counters = factory(["a", "b"]);

// console.log(counters.a()); // 1
// console.log(counters.a()); // 2
// console.log(counters.b()); // 1
// console.log(counters.b()); // 2

// 40. Write 2 things that were new or tricky today (comment).
// 1. Named function expressions allow recursion across the internal name and i can put internal name and call it internal only.
// 2. Arrow functions do not have their own 'this''.
