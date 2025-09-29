// 1. Create a module file called 'utils.js' that exports a function named 'greetUser' which takes a name parameter and returns "Hello, [name]!". Then import and use this function in another file.
import { greetuser } from "./utils.js";
greetuser("Mahmoud Saadallah");

// 2. Write a Promise that resolves after 2 seconds with the message "Task completed!". Use .then() to log the result to the console.
let Task1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Task completed!");
  }, 2000);
});
Task1.then((message) => {
  console.log(message);
});

// 3. Create an async function called 'waitAndGreet' that uses setTimeout with a Promise to wait 1 second, then returns "Welcome!".
async function waitAndGreet() {
  const message = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Welcome!");
    }, 1000);
  });
  return message;
}
waitAndGreet().then((mes) => console.log(mes));
// 4. Write an async function that fetches user data from 'https://jsonplaceholder.typicode.com/users/1' and logs the user's name and email to the console.

async function fetchAndLogUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const user = await response.json();
    console.log(`Name: ${user.name}, Email: ${user.email}`);
  } catch (error) {
    console.error("Error fetching user:", error);
  }
}
fetchAndLogUser();

// 5. Create a function that fetches the first 3 posts from 'https://jsonplaceholder.typicode.com/posts' and returns only their titles as an array.

async function getFirstThreePostTitles() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    const titles = posts.slice(0, 3).map((post) => post.title);
    return titles;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

getFirstThreePostTitles().then((titles) =>
  console.log("First 3 post titles:", titles)
);

// 6. Create a simple timer function using Promise that counts from 1 to 3, logging each number after 1 second intervals.
let count = 1;
function timer() {
  if (count <= 3) {
    console.log(count);
    count++;
    setTimeout(timer, 1000);
  }
}
function timerCount() {
  timer();
}

timerCount();

// 7. Write a function that safely parses JSON data with try/catch. Test it with both valid JSON string '{"name": "Omar"}' and invalid JSON '{name: Omar}'.
function jsonParser(data) {
  try {
    const dataParsed = JSON.parse(data);
    return dataParsed;
  } catch (error) {
    throw new Error(error);
  }
}
console.log(jsonParser('{"name": "Omar"}')); // {name: 'Omar'}
console.log(jsonParser("{name: Omar}")); // Uncaught Error: SyntaxError: Expected property name or '}' in JSON at position 1 (line 1 column 2)

// 8. Create an async function that fetches data from 'https://jsonplaceholder.typicode.com/users/1/todos', converts it to JSON, and returns the count of completed todos.
// Async function to fetch and count completed todos
async function getCompletedTodosCount() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/1/todos"
  );
  const data = await response.json();
  const completedTodos = data.filter((todo) => todo.completed).length;
  return completedTodos;
}
getCompletedTodosCount().then((count) => {
  console.log("Completed todos:", count);
});

// 9. Build a simple module that exports a default class called 'DataFetcher' with a method 'getUser(id)' that fetches and returns user data from the JSONPlaceholder API.
import DataFetcher from "./dataFetcher.js";
const fetcher = new DataFetcher();
fetcher.getUser(1).then((user) => console.log(user));
