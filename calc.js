function add(a, b) {
    return Number(a) + Number(b);
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
    : (op === '−') ? subtract(a, b)
    : (op === '×') ? multiply(a, b)
    : (op === '÷') ? divide(a, b)
    : 'Invalid input';
}

let displayValue = '';

const buttons = document.querySelectorAll("button");
let display = document.querySelector('.display');

Array.from(buttons).forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '=') {
            // Filter out the operators into an array.
            const ops = Array.from(displayValue).filter((item) => {
                return !(item >= 0 || item <= 9 || item === '.');
            });

            // Filter out the numbers into an array, including multiple digits.
            const nums = [];
            let num = '';
            let i = 0;
            while (i < displayValue.length) {
                if (displayValue[i] >= 0 && displayValue[i] <= 9 || displayValue[i] === '.') {
                    num += displayValue[i];
                    i++;
                }   else {
                        nums.push(num);
                        num = '';
                        i++;
                    }
            }
            // Add the last digit to the array.
            nums.push(num);

            displayValue = '';
            display.textContent = runOperate(nums, ops);

        }   else if (button.textContent === 'AC') {
            // Clear the display.
            displayValue = '';
            display.textContent = '';
        }   else {
            displayValue += button.textContent;
            display.textContent = displayValue;
        }
    })
});

// This function takes in an array of numbers and corresponding operators. It then evaluates
//  the numbers and operators and returns the final answer.
function runOperate(nums, ops) {
    let a = 0;
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        if (ops[j]) {
            a = operate(ops[i],nums[i],nums[j]);
            // Put the result of the previous expression in the next number place to be evaluated.
            nums[j] = a;
        }   else {
                // return answer rounded to the 4th decimal place
                return Math.round((operate(ops[i],nums[i],nums[j])) * 10000 ) / 10000;
            }   
            }
}