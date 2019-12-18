/*
    User input

    Check input validity

        If 0-9, replace 0 with nr input

        If operation, add operation (counter)

        previusInput mathExpression newInput
*/

// let input = document.getElementById('input');
// let findResult = document.getElementById('find-result');
let answerContainer = document.getElementById('answer');

// let userInput = ['0'];

// Parentheses
function parentheses() {
    var counter = 0;

    return {
        increment: () => {
            counter++;
        },
        decrement: () => {
            counter--;
        },
        count: () => {
            return counter;
        }
    }
}

// Input
function input() {
    let input = document.getElementById('input');
    let inputArray = ['0'];

    return {
        add: (value) => {
            inputArray.push(value);
            // input.value = inputArray.join('');
        },
        toArray: () => {
            return inputArray;
        },
        toString: () => {
            return inputArray.join('');
        },
        deleteCurrent: () => {
            inputArray.pop();
        },
        deletePrevious: () => {
            inputArray.splice(-2, 1);
        },
        // deleteLast: (count) => {
        //     inputArray.splice(-count, count);
        // },
        // current: () => {
        //     return inputArray[inputArray.length - 1];
        // },
        previous: () => {
            return inputArray[inputArray.length - 2];
        },
        current: () => {
            return inputArray[inputArray.length - 1];
        },
        set: (value) => {
            inputArray = [value]
            input.value = inputArray.join('');
        },
        show: () => {
            input.value = inputArray.join('');
        }
    }
}


let userInput = input();
// console.log(userInput.current());
// console.log(userInput.previous());

let openParentheses = parentheses();
let closeParentheses = parentheses();

// console.log(userInput.toString());

function addToInput(el) {
    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let operations = ['/', '*', '-', '+', 'mod'];

    userInput.add(el.textContent);

    // Parentheses
    // if (userInput.current() === '(') {
    //     openParentheses.increment();
    // } else if (userInput.current() === ')') {
    //     closeParentheses.increment();
    // }

    // if (userInput.current() === ')' && openParentheses.count() < closeParentheses.count()) {
    //     closeParentheses.decrement();
    // }

    // If it's the first input, replacing the 0 .. else, adding to the input
    if (userInput.toString() === '0' && numbers.includes(userInput.current())) {
        userInput.set(userInput.current());
        console.log("1: >> " + userInput.toArray());
    } else {
        userInput.show();
        console.log("2: >> " + userInput.toArray());
    }

    // No double operations
    if (operations.includes(userInput.previous()) && operations.includes(userInput.current())) {
        console.log("333: >> " + userInput.toArray());
        userInput.deletePrevious();
        userInput.show();
        console.log("4: >> " + userInput.toArray());
    }
}

/*
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

function calculateResult() {
    // let mathExpression = userInput.join('');
    let operations = ['/', '*', '-', '+', 'mod'];
    let lastInput = userInput[userInput.length - 1];
    let answer;

    // If the last input is a operation, it'll be deleted
    if (operations.includes(lastInput)) {
        userInput.pop();
        // mathExpression = userInput.join('');
    }

    // Close the open paraentheses
    while (openParentheses.count() > closeParentheses.count()) {
        console.log('asdfasdf')
        input.value += ')';
        userInput.push(')');
        closeParentheses.increment();
    }
    // mathExpression = userInput.join('');
    // console.log(mathExpression);

    try {
        answer = math.evaluate(input.toString());
    } catch (error) {
        console.error('ERRORRRRRR');
        answer = `¯\\_(ツ)_/¯`;
    }

    answerContainer.textContent = answer;

    console.log(`Answer: ${answer}`)
}*/