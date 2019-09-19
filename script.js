'use strict'

const input = document.getElementById('userinput');
const button = document.getElementById('enter');
const ul = document.querySelector ('ul');
const li = document.createElement('li');

function inputlenght () {
    return input.value= "";
}

function addListAfterClick () {
    if (inputlenght () > 0){
        createElement ();
    }
}

