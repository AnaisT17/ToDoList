`use strict`;

const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");
let li;

styl();

function styl(){
document.body.style.fontFamily = "Cedarville Cursive";
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
    li.textContent ="";
}


function deleteLi() {
    let del = document.getElementsByClassName("supp");
    let text
    for ( let i = 0; i < del.length; i++) {
        del[i].onclick = function () {
        text = this.parentElement;
        text.remove();
         }
    }
 }

function recallFunRemovesButton() {
    createRemovesButton();
    removesLi();
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