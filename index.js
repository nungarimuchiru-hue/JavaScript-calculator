/**
 * JavaScript Calculator Lab
 * Goal: To display arithmetic calculations.
 */

// 1. History Tracking
const calculationHistory = [];

// 2. Arithmetic Functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
};

/**
 * 3. Main Controller (Code Syntax and conventions)
 *  This function processes the maths and logs it to history.
 */
function calculate(num1, num2, operation) {
    let results;
    let symbol;

    // Standard switch statement for clean syntax
    switch (operation.toLowerCase()){
        case "add":
            result = add(num1, num2);
            symbol = "+";
            break;
        case "subtract":
            result = subtract(num1, num2);
            symbol = "-";
            break;
        case "multiply":
            result = multiply(num1, num2);
            symbol = "*";
            break;
        case "divide":
            result = divide(num1, num2);
            symbol = "/";
            break;
        default:
            return "invalid Operation";
}

// Save calculation to history object
const historyEntry = {
    expression: "${num1} ${symbol} ${num2}" ,
    result: result,
    time: new Date().tolacaltimestring()
};

calculationHistory.push(historyEntry);
return results;
}

// --- TESTING THE CODE ---
console.log("Result 1:", calculate(10, 5, "add"));
console.log("Result 2:", calculate(20, 4, "divide"));

console.log(--- "Calculation History ---");
console.table(calculationhistory);