let button = document.getElementById("enter");
let input= document.getElementById("userinput");
let ul = document.querySelector("ul");
let list = document.querySelector("ul > li");

function inputLength() {
  return input.value.length;
}

function createListElement() {
    let li = document.createElement("li");
    let btn = document.createElement("button");
    li.appendChild(document.createTextNode(input.value));
    btn.appendChild(document.createTextNode("Done!"));
    ul.appendChild(li);
    li.appendChild(btn);
    input.value = "";

}

function buttonClick() {
    if (inputLength() > 0) {
      createListElement();
    } 
}

function inputClick(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
      createListElement();
    }
}

function toggleClick() {
    let li = document.querySelector("li");
    li.classList.toggle("done");
}

button.addEventListener("click", buttonClick);
input.addEventListener("keypress", inputClick);
list.addEventListener("click", toggleClick);





