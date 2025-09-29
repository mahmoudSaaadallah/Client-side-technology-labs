// 1- Write a function that greets a user, using a default parameter for the name.
function sayHi(greeting, name = "Mahmoud") {
  return greeting + name;
}
console.log(sayHi("Hello, ", "Omar"));
console.log(sayHi("Hello, "));

// 2- Write a function that calculates the total price with a default tax rate parameter.
function totalPrice(price, tax = 0.14) {
  return price + price * tax;
}
console.log(totalPrice(100));

// 3- Write a function that creates a user object, using a default role parameter.
function createUser(name, age, role = "user") {
  return { name, age, role };
}
console.log(createUser("Omar", 32, "admin"));
console.log(createUser("Mahmoud", 25));

// 4- Write a function that multiplies any number of arguments using the rest operator.
function multiply(...x) {
  return x.reduce((m, acc) => {
    return m * acc;
  }, 1);
}
console.log(multiply(2, 2, 2));

// 5- Write a function that multiplies the first argument by the sum of all the rest using the rest operator.
function multiplyAndSum(a, ...x) {
  return (
    a *
    x.reduce((s, acc) => {
      return s + acc;
    }, 0)
  );
}
console.log(multiplyAndSum(2, 2, 4));

// 6- Write a function that takes a variable number of strings and returns them as a single array using the rest operator.
function singleArr(...x) {
  return x;
}
console.log(singleArr("Ahmed", "Emad", "Mahmoud", "Saadallah"));

// 7- Create a new array by combining two arrays using the spread operator.
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let combinedArr = [...arr1, ...arr2];
console.log(combinedArr);

// 8- Copy an array using the spread operator.
arr1 = [1, 2, 3, 4];
arr2 = [...arr1];
console.log(arr2);

// 9- Merge two objects into one using the spread operator.
obj1 = {
  name: "Saadallah",
  age: "56",
};
obj2 = {
  heigh: 1.75,
  weight: 80,
};
let fobj = { ...obj1, ...obj2 };
console.log(fobj);

// 10- Update a property in an object using the spread operator to create a new object.
obj1 = {
  name: "Saadallah",
  age: "56",
};
obj2 = { ...obj1, age: 57 };
console.log(obj2);

// 11- Destructure an array to get the first and second elements into variables.
let arr = [1, 2, 3, 4];
let [a, b] = arr;
console.log(a, b);

// 12- Destructure an array to get the first element and the rest into another array.
arr = [1, 2, 3, 4];
let [x, ...xarray] = arr;
console.log(x, xarray);

// 13- Destructure an object to extract two properties into letiables.
obj1 = {
  name: "Saadallah",
  age: "56",
  heigh: 1.75,
  weight: 80,
};
let { name, age } = obj1;
console.log(name, age);

// 14- Destructure an object and rename the extracted properties.
obj1 = {
  name: "Saadallah",
  age: "56",
  heigh: 1.75,
  weight: 80,
};
let { name: fullName, age: DOB } = obj1;
console.log(fullName, DOB);

// 15- Write a function that takes an object as a parameter and uses destructuring in the parameter list to extract specific properties.
function printUser({ name, age }) {
  console.log(name, age);
}
printUser({ name: "Mahmoud", age: 25, role: "user" });
