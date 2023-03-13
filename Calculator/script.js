const operations = {
    "+": (a, b) => {return a + b},
    "-": (a, b) => {return a - b},
    "*": (a, b) => {return a * b},
    "/": (a, b) => {return b === 0 ? undefined : a / b}
};

const display = document.querySelector("#display");
const errorText = document.querySelector("#zeroError");
let partialOperand;
let operands = [];
let operators = [];

function updateDisplay (append) {
    display.textContent += append;
}

function clearDisplay () {
    display.textContent = "";
    errorText.textContent = "";
}

function clearInput () {
    partialOperand = undefined;
    operands = [];
    operators = [];
    clearDisplay();
}

function addNumberToOperand (number) {
    updateDisplay(number);
    if(partialOperand === undefined){
        partialOperand = number;
        return;
    }
    partialOperand *= 10;
    partialOperand += number;
}

function addOperator (operator) {
    if(partialOperand !== undefined){
        operands.push(partialOperand);
        operators.push(operator);
        partialOperand = undefined;
        updateDisplay(operator);
    }
}

function equals () {
    if(partialOperand !== undefined){
        operands.push(partialOperand);
        const result = compute();
        if(result === undefined){
            clearInput();
            errorText.textContent = "When you try to divide by zero";
            return;
        }
        partialOperand = result;
        clearDisplay();
        updateDisplay(result);
    }
}

function compute () {
    while(operators.length !== 0){
        const left = operands.shift();
        const right = operands.shift();
        const op = operators.shift();
        const result = operations[op](left, right)
        if(result === undefined){
            return undefined;
        }
        operands.unshift(result);
    }
    return operands.shift();
}
