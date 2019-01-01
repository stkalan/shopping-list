let button = document.getElementById("enter");
let input= document.getElementById("userinput");
let ul = document.querySelector("ul");
let li = document.getElementsByTagName("li");


function inputLength() {
  return input.value.length;
}

function createListElement() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    // creating and appending button to toggle .done class on and off
    let btn = document.createElement("button");
    li.appendChild(btn);
    btn.appendChild(document.createTextNode("Done"));

    // creating and appending button to delete items off the list
    let btn2 = document.createElement("button");
    btn2.appendChild(document.createTextNode("Delete"));
    li.appendChild(btn2);

    // onclick event for both buttons
    btn.onclick = underlineList;
    btn2.onclick = removeListElement;

}

// toggles the .done class in css on and off
function underlineList(event){
    event.target.parentNode.classList.toggle("done");
}

// removes the list item
function removeListElement(event2){
    event2.target.parentNode.remove();
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


button.addEventListener("click", buttonClick);
input.addEventListener("keypress", inputClick);









