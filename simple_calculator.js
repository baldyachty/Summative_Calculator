// Array to store all calculation history
const calculationHistory = [];

// Function to store each calculation as an object in history
function storeHistory(num1, num2, operator, result) {
    const calculation = {
        num1: num1,
        num2: num2,
        operator: operator,
        result: result
    };
    calculationHistory.push(calculation);
}

// Add two numbers
function add(a, b) {
    const result = a + b;
    storeHistory(a, b, '+', result);
    return result;
}

// Subtract two numbers
function subtract(a, b) {
    const result = a - b;
    storeHistory(a, b, '-', result);
    return result;
}

// Multiply two numbers
function multiply(a, b) {
    const result = a * b;
    storeHistory(a, b, '*', result);
    return result;
}

// Divide two numbers 
function divide(a, b) {
    if (b === 0) {
        const errorMsg = "Cannot divide by zero";
        storeHistory(a, b, '/', errorMsg);
        return errorMsg;
    }
    const result = a / b;
    storeHistory(a, b, '/', result);
    return result;
}

// Function to display all recorded calculations
function displayHistory() {
    if (calculationHistory.length === 0) {
        console.log("No stored calculations.");
        return;
    }

    console.log("Calculation History:");
    for (let i = 0; i < calculationHistory.length; i++) {
        const item = calculationHistory[i];
        console.log(`${i + 1}. ${item.num1} ${item.operator} ${item.num2} = ${item.result}`);
    }
}

// Example usage
add(10, 5);
subtract(20, 8);
multiply(4, 3);
divide(15, 3);
divide(10, 0);

displayHistory();