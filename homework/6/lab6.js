// JavaScript code for changing the content section's background color
const changeColorButton = document.getElementById('changeColorButton');
const content = document.querySelector('.HolyGrail-content');

changeColorButton.addEventListener('click', function() {
    // Generate a random color
    const randomColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    // Change the background color of the content section
    content.style.backgroundColor = randomColor;
});



// Function to calculate the factorial of a number
function calculateFactorial(number) {
    if (number < 0) {
        return "Factorial is not defined for negative numbers.";
    } else if (number === 0) {
        return 1;
    } else {
        let result = 1;
        for (let i = 1; i <= number; i++) {
            result *= i;
        }
        return result;
    }
}

// Function to display the factorial result
function displayFactorialResult(result) {
    const output = document.getElementById("output");
    output.innerHTML = result;
}

// Function to display an error message
function displayError(message) {
    const error = document.getElementById("error");
    error.innerHTML = message;
}

// Event listener for the button click
document.getElementById("calculateButton").addEventListener("click", function () {
    const inputNumber = document.getElementById("inputNumber").value;
    if (inputNumber.trim() === "") {
        displayError("Please enter a number.");
    } else if (isNaN(inputNumber)) {
        displayError("Please enter a valid number.");
    } else {
        const factorialResult = calculateFactorial(parseInt(inputNumber));
        displayFactorialResult(factorialResult);
        document.getElementById("error").innerHTML = "";
    }
});
