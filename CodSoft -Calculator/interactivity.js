// script.js
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btn');
    const display = document.querySelector('.display');
    let currentInput = '0';
    let previousInput = '';
    let operator = null;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;
            
            if (button.classList.contains('operator')) {
                handleOperator(value);
            } else {
                handleNumber(value);
            }
            updateDisplay();
        });
    });

    function handleNumber(value) {
        if (currentInput === '0' && value !== '.') {
            currentInput = value;
        } else {
            currentInput += value;
        }
    }

    function handleOperator(value) {
        if (value === '=') {
            if (operator && previousInput) {
                currentInput = calculate(previousInput, currentInput, operator);
                operator = null;
                previousInput = '';
            }
        } else {
            if (operator && previousInput) {
                currentInput = calculate(previousInput, currentInput, operator);
            }
            operator = value;
            previousInput = currentInput;
            currentInput = '0';
        }
    }

    function calculate(a, b, operator) {
        let result;
        a = parseFloat(a);
        b = parseFloat(b);
        switch (operator) {
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case '*':
                result = a * b;
                break;
            case '/':
                result = a / b;
                break;
            default:
                return b;
        }
        return result.toString();
    }

    function updateDisplay() {
        display.textContent = currentInput;
    }
});
