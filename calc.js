function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Takes in an operation and two numbers and executes the operation on them.
function operate(op, a, b) {
    return (op === '+') ? add(a, b)
    : (op === '-') ? subtract(a, b)
    : (op === '*') ? multiply(a, b)
    : (op === '/') ? divide(a, b)
    : 'Invalid input';
}