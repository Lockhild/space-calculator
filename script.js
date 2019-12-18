/*
    User input

    Check input validity

        If 0-9, replace 0 with nr input

        If operation, add operation (counter)

        previusInput mathExpression newInput
*/

let input = document.getElementById('input');
let findResult = document.getElementById('find-result');
let answer = document.getElementById('response');

let userInput = ['0'];

function addToInput(el) {
    let previousInput = userInput[userInput.length - 1];
    let newInput = el.firstChild.innerHTML;
    let mathExpression = userInput.join('');
    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let operations = ['/', '*', '-', '+', 'mod'];
    let addSymbols = ['(', ')', '.'];

    // If it's the first input, replacing the 0 .. else, adding to the input
    if (mathExpression === '0' && numbers.includes(newInput)) {
        input.value = newInput;
        userInput = [newInput];
    } else {
        input.value += newInput;
        userInput.push(newInput);
    }

    console.log(`Previous : ${previousInput}`);
    console.log(`Current  : ${newInput}`);
    console.log(`Math     : ${mathExpression}`);
    console.log(`---------------`);

    // No double operations
    if (operations.includes(previousInput) && operations.includes(newInput)) {
        console.warn('Ahoi!');
        // if new input is an operation as well, replacing the previous one
        // removing the last two elements from the array
        userInput.splice(-2, 2);
        userInput.push(newInput);
        input.value = userInput.join('');
    }

}

function allClear() {
    input.value = '0';
    userInput = ['0'];
}

function clearEntry() {
    userInput.pop();

    if (userInput.length === 0) {
        input.value = '0';
    } else {
        input.value = userInput.join('');
    }
}