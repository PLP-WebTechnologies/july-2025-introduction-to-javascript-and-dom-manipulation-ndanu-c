let firstNumber = document.getElementById("firstNumber"); // Get the first number input element
let secondNumber = document.getElementById("secondNumber"); // Get the second number input element
let firstNumberValue = firstNumber.value; // Initialize the first number value
let secondNumberValue = secondNumber.value; // Initialize the second number value
let result = document.getElementById("result"); // Get the result display element
let calculateButton = document.getElementById("calculateButton"); // Get the add button element

// Function to calculate the sum of two numbers entered by the user
function addNumbers() {
    if(isNaN(firstNumberValue) || isNaN(secondNumberValue)) {
        result.innerHTML = "Please enter valid numbers."; 
    }
    else{
        firstNumberValue = parseFloat(firstNumber.value);
        secondNumberValue = parseFloat(secondNumber.value);
        let sum = firstNumberValue + secondNumberValue;
        result.innerHTML = "The sum is: " + sum;
    }
}

// Function to change the background color of the body
function changeColorMode() {
    let body = document.body; // Get the body element
    let button = document.getElementById("changeColorButton"); // Get the change color button element
    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "white"; // Change to white background
        body.style.color = "black"; // Change text color to black
        button.innerHTML = "Change to Dark Mode"; // Update button text
    } else {
        body.style.backgroundColor = "black"; // Change to black background
        body.style.color = "white"; // Change text color to white
        button.innerHTML = "Change to Light Mode"; // Update button text
    }
}


// Loop to display happy new Year countdown
let countdownTimer = 10; // Set the countdown starting point

function startCountdown(){
    for (let i = countdownTimer; i >= 0; i--){
        console.log(i);
    }
    console.log("Happy New Year!");
}
startCountdown(); // Call the countdown function

//A while loop to display numbers from 1 to 10
let number = 1; // Initialize the number variable
while (number <= 10){
    console.log(number); // Log the current number
    number++; // Increment the number by 1
}