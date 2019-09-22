`use strict`;

const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");
let li;

styl();

function styl(){
document.body.style.fontFamily = "Cedarville Cursive";
document.body.style.fontFamily h1 = "Plaster";
}

function inputValueLength() {
    return input.value.length;
}

function restartInput() {
    input.value = "";
}

function textToLi() {
    li.append(document.createTextNode(CapitalizeText()));
}

function listToUl() {
    ul.insertAdjacentElement("beforeend", li);
}

function createLi() {
    li = document.createElement("li");
    li.textContent = "Ce que je récupère dans mon formulaire";
}

function CapitalizeText() {
    return input.value[0].toUpperCase() + input.value.slice(1, inputValueLength()).toLowerCase();
}
function listInUl() {
    createLi();
    textToLi();
    listToUl();
    restartInput();
}
function addAfterClick() {
    if (inputValueLength() > 0) {
        listInUl();
    }
}

function addAfterKeypress(event) {
    if (inputValueLength() > 0 && event.keyCode === 13) {
        listInUl();
    }
}

button.addEventListener("click", addAfterClick);

input.addEventListener("keypress", addAfterKeypress);