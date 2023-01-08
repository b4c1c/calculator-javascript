let num1 = 10;
let num2 = 5;

document.getElementById('num1').textContent = num1;
document.getElementById('num2').textContent = num2;

let sum = document.getElementById('sum-element')


function add(){
    let result = num1 + num2;
    sum.textContent = "Sum: " + result
}

function subtract(){
    let result = num1 - num2;
    sum.textContent = "Sum: " + result
}

function divide(){
    let result = num1 / num2;
    sum.textContent = "Sum: " + result
}

function multiply(){
    let result = num1 * num2;
    sum.textContent = "Sum: " + result
}

function reset(){
    sum.textContent = "Sum: "
}




function alertBox() {
    alert("This project is part of free javascript course from scrimba.com. \nI did it way back, but now I tried to do it on my own with some CSS styling and additional two buttons.\nI did, however, use some google help to get it in present state.\nHope you like it!\nb4c1c ")
}