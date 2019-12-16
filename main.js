let input = document.getElementById('input');
let findResult = document.getElementById('find-result');
let response = document.getElementById('response');

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

function addToInput(el) {
    input.value += el.firstChild.innerHTML;

    let mathExpresssion = getMathExpression();
    let answer = calculateMathExpression(mathExpresssion);

    if (answer) {
        showAnswer('Answer = ');
    }
}

function calculateModulus(mathExpresssion) {
    let modValues = mathExpresssion.split('mod');
    let answer = math.mod(Number(modValues[0]), Number(modValues[1]));

    return answer;
}

function deleteInput() {
    input.value = '0';
    showAnswer('Answer = ');
}