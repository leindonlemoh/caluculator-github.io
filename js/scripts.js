
let result = document.querySelector("#result");

function clearScreen() {
    result.value = "";
}

function display(value) {
    result.value += value;
}

function calculate() {
    let displayValue = result.value;
    let answer = eval(displayValue);
    result.value = answer;
}
