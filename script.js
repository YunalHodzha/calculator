let userInput = document.getElementById("userInput");

let expression = '';

function press(num) {
    expression += num;
    userInput.value = expression;
}

function equal() {
    if (eval(expression) === undefined) {
        
    } else {
        userInput.value = eval(expression);
        expression = '';
    }
}

function erase() {
    expression = '';
    userInput.value = expression;
}
