// 1. Open a new window with a specific URL and size, then close it after 3 seconds using JavaScript.
var url = "https://www.google.com";
var newopen = window.open(url, "Width=400px, height=400px");
if (newopen) {
  setTimeout(() => {
    newopen.close();
  }, 3000);
}

//

// 2. Display the browser's user agent string in an alert.
alert(navigator.userAgent);

//

// 3. Use `navigator` to detect if the browser is online or offline and log the result.
console.log(window.navigator.onLine);

//

//4. Write code to reload the current page after 5 seconds.
setTimeout(() => {
  location.reload();
}, 5000);

//

//5. Get the current page URL, protocol, and hostname using `location` and log them.
console.log(window.location.url);
console.log(window.location.protocol);
console.log(window.location.hostname);

//

//6. Use `history` to go back one page, then forward one page (write the code, don't actually run it).
window.history.forward();
window.history.back();

//

//7. Show the screen width and height in a div -change the div content- on the page.
document.getElementById("dim").textContent =
  window.screen.height + " Height " + window.screen.width + " Width";

//

// 8. Use `setTimeout` to change the content of a hyperlink -a- with a new content after 2 seconds, and provide a button to cancel it.
document.getElementById("link");
timeoutId = setTimeout(() => {
  link.textContent = "New Link Content";
  link.href = "https://www.example.com";
}, 2000);

// 9. Use `setInterval` to update the time on the page title every second, and a button to stop it.

setInterval(() => {
  document.title = new Date().toLocaleTimeString();
}, 1000);

//

//10. Show a confirm dialog asking "Do you want to continue?" and log the user's choice("user said yes", "user said no").
var ans = window.confirm("Do you want to continue?");
if (ans) console.log("user said yes");
else console.log("user said no");

//

//11. Select the first `<ul>` in the document and log its `childNodes` and `children` properties. Explain the difference in a comment.
console.log(document.getElementById("ls").childNodes);
console.log(document.getElementById("ls").children);

// The differenc is the childNodes get more details like the text nodes which are the spaces between elements and also the comments
// on the other hand the children get only the html tags.

//

//12. Write a function that logs the tag names of all direct child elements of <body>.
console.log(document.getElementById("body").childNodes);

//

//13. Given a parent element, loop through its `childNodes` and log only the nodes that are elements (not text/comments).
var n = document.getElementById("body").childNodes;
for (var i = 0; i < n.length; i++) {
  if (n[i].nodeType === 1) {
    console.log(n[i]);
  }
}

//

//14. Use `firstChild` and `firstElementChild` on a container and explain the difference in a comment.
var container = document.getElementById("ls");
console.log("firstChild:", container.firstChild);
console.log("firstElementChild:", container.firstElementChild);

// 15. Write code to get all `<li>` elements inside a `<ul>` using `children` and explain the difference.
var ul = document.getElementById("ls");
console.log(ul.children);

//

// 17. Write a function that logs all sibling elements of a given element (excluding itself).
function logSiblingElements(elem) {
  if (!elem || !elem.parentElement) return;
  var siblings = elem.parentElement.children;
  for (var i = 0; i < siblings.length; i++) {
    if (siblings[i] !== elem) {
      console.log(siblings[i]);
    }
  }
}

logSiblingElements(document.getElementById("ls"));

//

//18. Use `nextSibling` and `nextElementSibling` to traverse from the first child to the last child of a <ul>, logging each node.
var ul = document.getElementById("ls");
var node = ul.firstChild;
while (node) {
  console.log("nextSibling:", node);
  node = node.nextSibling;
}
var elem = ul.firstElementChild;
while (elem) {
  console.log("nextElementSibling:", elem);
  elem = elem.nextElementSibling;
}

//

//19. Count how many element children a given node has (not using `children.length`).
function countElementChildren(node) {
  var count = 0;
  var child = node.firstChild;
  while (child) {
    if (child.nodeType === 1) {
      count++;
    }
    child = child.nextSibling;
  }
  return count;
}

var ul = document.getElementById("ls");
console.log(countElementChildren(ul));

//

// 20. Write a function that takes the first form element and logs the names and values of all its input fields using the elements collection.
function logFormInputs() {
  var form = document.getElementById("form");
  if (!form) return;
  for (var i = 0; i < form.elements.length; i++) {
    var el = form.elements[i];
    if (
      el.tagName === "INPUT" ||
      el.tagName === "SELECT" ||
      el.tagName === "TEXTAREA"
    ) {
      console.log("Name:", el.name, "Value:", el.value);
    }
  }
}
logFormInputs();

//

//21. Access all forms in the document using `document.forms` and log their names.
console.log(document.forms);

//

// 22. Access all images in the document using document.images and log their src attributes.
for (var i = 0; i < document.images.length; i++) {
  console.log(document.images[i].src);
}

//

//23. Write a function that takes a form and disables all its input fields using the elements collection.
function disableFormInputs(form) {
  if (!form) return;
  for (var i = 0; i < form.elements.length; i++) {
    var el = form.elements[i];
    if (
      el.tagName === "INPUT" ||
      el.tagName === "SELECT" ||
      el.tagName === "TEXTAREA"
    ) {
      el.disabled = true;
    }
  }
}
disableFormInputs(document.getElementById("form"));

//

//24. Use Array.from to convert document.images to an array and filter images with width > 100px.
var largeImages = Array.from(document.images).filter(function (img) {
  return img.width > 100;
});
console.log(largeImages);
