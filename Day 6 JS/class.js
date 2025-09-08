function swapNumbers(a, b) {
    console.log(`Original values: a = ${a}, b = ${b}`);
    a = a + b;
    b = a - b;
    a = a - b;
  
    console.log(`Swapped values: a = ${a}, b = ${b}`);
    
    return [a, b];
}
let num1 = 5;
let num2 = 10;
swapNumbers(num1, num2);

let num3 = -3;
let num4 = 7;
swapNumbers(num3, num4);
    /**
     * This function is called when the 'Calculate' button is clicked.
     * It gets the input values, performs the arithmetic operations,
     * and displays the results on the page.
     */
    function calculate() {
      // Get the input elements from the HTML
      const num1Input = document.getElementById('number1');
      const num2Input = document.getElementById('number2');
      const resultsDiv = document.getElementById('resultsContent');

      // Convert the input values to numbers.
      // parseFloat() handles both integers and decimal numbers.
      const num1 = parseFloat(num1Input.value);
      const num2 = parseFloat(num2Input.value);

      // Check if the inputs are valid numbers.
      if (isNaN(num1) || isNaN(num2)) {
        resultsDiv.innerHTML = '<p class="text-red-500">Please enter two valid numbers.</p>';
        return; // Stop the function if inputs are invalid.
      }
      
      // Perform all the arithmetic operations
      const sum = num1 + num2;
      const difference = num1 - num2;
      const product = num1 * num2;
      
      let divisionResult;
      // Handle division by zero to prevent errors
      if (num2 === 0) {
        divisionResult = 'Cannot divide by zero';
      } else {
        divisionResult = num1 / num2;
      }
      
      let moduloResult;
      // Handle modulo by zero
      if (num2 === 0) {
        moduloResult = 'Cannot perform modulo with zero';
      } else {
        moduloResult = num1 % num2;
      }

      // Create a string with the results formatted nicely
      const resultsHTML = `
        <p><span class="font-semibold">Addition:</span> ${num1} + ${num2} = ${sum}</p>
        <p><span class="font-semibold">Subtraction:</span> ${num1} - ${num2} = ${difference}</p>
        <p><span class="font-semibold">Multiplication:</span> ${num1} * ${num2} = ${product}</p>
        <p><span class="font-semibold">Division:</span> ${num1} / ${num2} = ${divisionResult}</p>
        <p><span class="font-semibold">Modulo:</span> ${num1} % ${num2} = ${moduloResult}</p>
      `;

      // Update the results div with the new content
      resultsDiv.innerHTML = resultsHTML;
    }