/**
 * Complete the calc function to accept three parameters
 1st must be a number
 2nd must be number
 3rd must be an operator (+, -, /, *)
 
 exp:
 
 1st : 5
 2nd : 6
 3rd : "-"
 
 this function must do the calculation of (5 - 6) and output(return) their result (-1)
 
 */


 function calculate() {
    const firstNumber = parseFloat(document.getElementById("firstNumber").value);
    const secondNumber = parseFloat(document.getElementById("secondNumber").value);
    const operator = document.getElementById("operator").value;

    const result = calc(firstNumber, secondNumber, operator);

    document.getElementById("result").textContent = "Result: " + result;
}

function calc(a, b, oper) {
    switch (oper) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                return "Cannot divide by zero";
            }
            return a / b;
        default:
            return "Invalid operator";
    }
}
