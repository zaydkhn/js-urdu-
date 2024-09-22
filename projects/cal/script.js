// Select the result input field
const result = document.getElementById('result');

// Append value to the display
function appendValue(value) {
    result.value += value;
}

// Clear the display
function clearDisplay() {
    result.value = '';
}

// Delete the last character from the display
function deleteValue() {
    result.value = result.value.slice(0, -1);
}

// Perform the calculation
function calculate() {
    try {
        result.value = eval(result.value); // Use eval to calculate the expression
    } catch (error) {
        result.value = 'Error'; // Handle any errors (e.g., invalid expression)
    }
}

