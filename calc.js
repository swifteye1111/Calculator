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
            const ops = Array.from(displayValue).filter((item) => {
                return !(item >= 0 || item <= 9 || item === '.');
            });
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
            nums.push(num);

            displayValue = '';
            display.textContent = runOperate(nums, ops);

        }   else if (button.textContent === 'AC') {
            displayValue = '';
            display.textContent = '';
        }   else {
            displayValue += button.textContent;
            display.textContent = displayValue;
        }
    })
});

function runOperate(nums, ops) {
    let a = 0;
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        if (ops[j]) {
            a = operate(ops[i],nums[i],nums[j]);
            nums[j] = a;
        }   else return operate(ops[i],nums[i],nums[j]);
    }
}