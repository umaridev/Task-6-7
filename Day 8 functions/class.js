 // 1. Function to add two numbers and return the result.
 function addNumbers(a, b) {
    return a + b;
}

// 2. Function that returns whether a number is even or odd.
function checkEvenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// 3. Arrow function to greet a user by name.
const greetUser = (name) => {
    return `Hello, ${name}! Welcome.`;
};

// 4. Function to return the square of a number.
function squareNumber(num) {
    return num * num;
}

// 5. Convert a regular function to an arrow function.
// Original regular function
const regularFunctionCode = `function multiplyByTwo(x) {
return x * 2;
}`;

// Converted arrow function
const arrowFunctionCode = `const multiplyByTwo = (x) => {
return x * 2;
};`;

// Populate the conversion code block
document.getElementById('conversionCode').textContent = `
// Original regular function
${regularFunctionCode}

// Converted to an arrow function
${arrowFunctionCode}
`;

// Event listeners to handle user interaction
document.getElementById('addBtn').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    const result = addNumbers(num1, num2);
    document.getElementById('addResult').textContent = result;
});

document.getElementById('checkEvenOddBtn').addEventListener('click', () => {
    const num = parseInt(document.getElementById('evenOddInput').value);
    if (!isNaN(num)) {
        const result = checkEvenOrOdd(num);
        document.getElementById('evenOddResult').textContent = result;
    } else {
        document.getElementById('evenOddResult').textContent = "Please enter a valid number.";
    }
});

document.getElementById('greetBtn').addEventListener('click', () => {
    const name = document.getElementById('nameInput').value || 'Guest';
    const greeting = greetUser(name);
    document.getElementById('greetResult').textContent = greeting;
});

document.getElementById('squareBtn').addEventListener('click', () => {
    const num = parseFloat(document.getElementById('squareInput').value);
    if (!isNaN(num)) {
        const result = squareNumber(num);
        document.getElementById('squareResult').textContent = result;
    } else {
        document.getElementById('squareResult').textContent = "Please enter a valid number.";
    }
});