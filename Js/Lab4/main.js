// 1. Select the first <div> on the page using getElementsByTagName and log its innerHTML.
console.log(document.getElementsByTagName("div")[0].innerHTML);

//2. Using getElementById change the text of #my-p to "Hello DOM".
var v2 = document.getElementById("my-p");
v2.textContent = "Hello DOM";

//3. Use querySelector to select the element with class "target-div" and log its nodeName.
var v3 = document.querySelector(".target-div");
console.log(v3.nodeName);

//4. Use querySelectorAll to count how many <div> elements exist; log the count.
var v4 = document.querySelectorAll("div");
console.log(v4.length);

//5. Use getElementsByName on the email input (name="user-email") and set its value to "user@test.com".
var v5 = document.getElementsByName("user-email");
v5[0].value = "user@test.com";

//6. Check if the text input has a "name" attribute; if not add name="user-name" via setAttribute.
var v6 = document.getElementsByTagName("input");
if (!v6[0].name) {
  v6[0].setAttribute("name", "user-name");
}
console.log(v6[0].name); // user-name

//7. Append the string "- UPDATED" to the existing innerText of #my-p (keep original text).
var v7 = document.getElementById("my-p");
v7.innerText += " _ UPDATED";

//8. Create Images slider that work automatically and with next/prev/start/stop buttons.

//9. Set the placeholder of the text input to "Type your full name" using setAttribute.
var v9 = document.getElementsByTagName("input");
v9[0].setAttribute("placeholder", "Type your full name");
console.log(v9[0].placeholder);

//10. Log whether the email input has attribute "required"; if missing add it.
var v10 = document.getElementsByName("user-email");
if (!v10[0].hasAttribute("required")) {
  v10[0].setAttribute("required", "required");
}
//11. Write function getSelectedValue(selectId) returning the current selected option value.
function getSelectedValue(selectId) {
  var v11 = document.getElementById(selectId);
  return v11.options[v11.selectedIndex].value;
}
console.log(getSelectedValue("my-select"));

//12. Loop through all options of the select and log each option's text and value.
var v12 = document.getElementById("my-select");
console.log(v12.innerText);
console.log(v12.value);

//13. Programmatically select the option with value "EG".
var v13 = document.getElementById("my-select");
if (v13) {
  for (var i = 0; i < v13.options.length; i++) {
    if (v13.options[i].value === "EG") {
      v13.selectedIndex = i;
      break;
    }
  }
}

//14. Create function selectByText(selectId, text) that selects the first option whose text matches exactly.
function selectByText(selectId, text) {
  var v14 = document.getElementById(selectId);
  if (v14) {
    for (var i = 0; i < v14.options.length; i++) {
      if (v14.options[i].text === text) {
        v14.selectedIndex = i;
        break;
      }
    }
  }
}
selectByText("my-select", "United Kingdom");

//15. Replace innerHTML of #div-2 with a <p><b>Bold Text</b></p> (ensure bold renders, not printed literally).
var v15 = document.getElementById("div-2");
v15.innerHTML = "<p><b>Bold Text</b></p>";

//16. Add classes class-a and class-b to #div-2 then remove class-b (using classList).
var v16 = document.getElementById("div-2");
v16.className += " class-b";
v16.className += " class-a";
console.log(v16.classList);
v16.classList.remove("class-b");
console.log(v16.classList);

//17. Toggle class "hidden" on #div-2 twice; comment final visibility.
var v17 = document.getElementById("div-2");
v17.toggleAttribute("hidden");
v17.toggleAttribute("hidden");

//18. Create function insertAfter(refNode, newNode) that inserts newNode immediately after refNode.
function insertAfter(refNode, newNode) {
  if (refNode.parentNode) {
    if (refNode.nextSibling) {
      refNode.parentNode.insertBefore(newNode, refNode.nextSibling);
    } else {
      refNode.parentNode.appendChild(newNode);
    }
  }
}

//19. Create a new <div> saying "Dynamic Box" with yellow background and append inside #div-2.
var v19 = document.getElementById("div-2");
v19.innerHTML += '<div style="background-color: yellow;">Dymanic Box</div>';

//20. Insert a new <p> BEFORE the first child of #div-2 (insertBefore).
var v20 = document.getElementById("div-2");
var newP = document.createElement("p");
newP.textContent = "test test!!!";
v20.insertBefore(newP, v20.firstChild);

//21. Insert a <span> with text "AFTER END" right after #div-2 using insertAdjacentHTML.
var div2 = document.getElementById("div-2");
if (div2) {
  div2.insertAdjacentHTML("afterend", "<span>AFTER END</span>");
}

//22. Form onsubmit: prevent default and log values of text, email, and select inputs.
var form = document.querySelector("form");

form.onsubmit = function (e) {
  e.preventDefault();
  var textInput = form.querySelector('input[type="text"]');
  var emailInput = form.querySelector('input[type="email"]');
  var selectInput = form.querySelector("select");
  console.log("Text:", textInput.value);
  console.log("Email:", emailInput.value);
  console.log("Select:", selectInput.value);
};

//23. Add input event on the text input that logs its length whenever it changes.
var textInput = document.querySelector('input[type="text"]');
if (textInput) {
  textInput.addEventListener("input", function () {
    console.log("Text input length:", textInput.value.length);
  });
}

//24. Write validateEmailSimple(value) returning true if value contains both '@' and '.'; add 2 passing / 2 failing examples (comments).
function validateEmailSimple(value) {
  return value.includes("@") && value.includes(".");
}

//25. Create an element, append it to #div-2, then remove it using parent.removeChild(child).
var div2 = document.getElementById("div-2");

var tempElem = document.createElement("span");
tempElem.textContent = "Temporary Element";
div2.appendChild(tempElem);
div2.removeChild(tempElem);

/*25. Create an element, append it to <div id="wrapper">
  <p id="first">First</p>
  <p id="second">Second</p>
</div> */
var wrapper = document.getElementById("wrapper");
if (wrapper) {
  var newElem = document.createElement("span");
  newElem.textContent = "Appended to wrapper";
  wrapper.appendChild(newElem);
}

//27. Clone #div-2 , set clone id="div-2-clone", and insert it after original using insertAfter.
var div2 = document.getElementById("div-2");
if (div2) {
  var clone = div2.cloneNode(true);
  clone.id = "div-2-clone";
  insertAfter(div2, clone);
}

//28. Highlight all text & email inputs (green border) in a function highlightInputs(form) and call it on DOMContentLoaded.
function highlightInputs(form) {
  var inputs = form.querySelectorAll('input[type="text"], input[type="email"]');
  inputs.forEach(function (input) {
    input.style.border = "2px solid green";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("form");
  if (form) {
    highlightInputs(form);
  }
});

//29. Build function buildCard(title, content) returning <div class="card"> with an <h3> and <p>; append two cards to body.
function buildCard(title, content) {
  var card = document.createElement("div");
  card.className = "card";
  var h3 = document.createElement("h3");
  h3.textContent = title;
  var p = document.createElement("p");
  p.textContent = content;
  card.appendChild(h3);
  card.appendChild(p);
  return card;
}

document.body.appendChild(buildCard("Card 1", "This is the first card."));
document.body.appendChild(buildCard("Card 2", "This is the second card."));

//30. Add delegated click listener on body logging when a .card is clicked.
document.body.addEventListener("click", function (e) {
  if (e.target.classList.contains("card")) {
    console.log("Card clicked:", e.target.querySelector("h3").textContent);
  }
});

//31. Reflection (comment): Which two tasks were most challenging and why?
// task 8, because i don't know how to handel images in js

//32. Create an unordered list dynamically with 10 items, odd items have class 'odd', even items 'even'.
var ul = document.createElement("ul");
for (var i = 1; i <= 10; i++) {
  var li = document.createElement("li");
  li.textContent = "Item " + i;
  li.className = i % 2 === 0 ? "even" : "odd";
  ul.appendChild(li);
}
document.body.appendChild(ul);
