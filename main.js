// let input = document.getElementById('input');
// let findResult = document.getElementById('find-result');
// let response = document.getElementById('response');

function getMathExpression() {
    return input.value;
}

function calculateMathExpression(mathExpresssion) {
    try {
        math.evaluate(mathExpresssion);
    } catch (err) {
        // if it's not a valid math expression, we will just return undefined .. instead of throwing an error
        return
    }
    return math.evaluate(mathExpresssion);
}

function showAnswer(equalsText) {
    let mathExpresssion = getMathExpression();
    let answer;
    if (mathExpresssion.includes('mod')) {
        answer = calculateModulus(mathExpresssion);
    } else {
        answer = calculateMathExpression(mathExpresssion);
    }
    let html = `<span>${equalsText} ${answer}</span>`;
    response.innerHTML = html;
}

findResult.addEventListener('click', function () {
    showAnswer('Answer = ');
});

// function addToInput(el) {
//     let existingInput = input.value;
//     let newInput = el.firstChild.innerHTML;

//     // checking operation validitiy
//     if (!isOperationValid(existingInput, newInput)) {
//         // if another operation is typed, the previous one is replaced with the new one
//         input.value = existingInput.slice(0, -1) + newInput;
//     } else if ((Number(existingInput) === 0) // Deleting the 0 in the input if the first digit introduced is not 0
//         && (Number(newInput) || newInput === '0' || newInput === '(')) {
//         input.value = newInput;
//     } else if (isInputValid(existingInput, newInput)) {
//         input.value += newInput;

//         let mathExpresssion = getMathExpression();
//         let answer = calculateMathExpression(mathExpresssion);

//         if (answer) {
//             showAnswer('Answer = ');
//         }
//     } else {
//         console.error('NOT VALID');
//     }
// }

function calculateModulus(mathExpresssion) {
    let modValues = mathExpresssion.split('mod');
    let answer = math.mod(Number(modValues[0]), Number(modValues[1]));

    return answer;
}

function deleteInput() {
    input.value = '0';
    showAnswer('Answer = ');
}

function isInputValid(existingInput, newInput) {
    // dividing the existing inputs into an array of characters
    let charArray = existingInput.split('');


    // can't add ) if there's not a coresponding (
    if (newInput === ')') {
        // counting the number of open and close parathese
        // if open is greater than close, it means we can add the close one
        let open = 0;
        let close = 0;
        charArray.forEach(el => {
            if (el === '(') {
                open++;
            } else if (el === ')') {
                close++;
            }
        });
        if (open > close) {
            return true;
        }
        return false;
    }

    // if the newInput is the same as the previous input and it's not a number, we don't double the input
    return true;
}

// checking if the users writes multiple operations at once .. ++-*
function isOperationValid(existingInput, newInput) {
    let operations = ['/', '*', '-', '+', '.'];
    // dividing the existing inputs into an array of characters
    let charArray = existingInput.split('');
    // because 'mod' is multiple characters, it needs separate checking
    if ((operations.includes(charArray[charArray.length - 1]) || existingInput.includes('mod')) && (operations.includes(newInput))) {
        return false;
    } else {
        return true;
    }
}

