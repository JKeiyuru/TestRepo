// Simple JavaScript code: A basic counter app

let counter = 0;

// Function to update the display
function updateDisplay() {
    document.getElementById('counter-display').innerText = counter;
}

// Function to increment the counter
function increment() {
    counter++;
    updateDisplay();
}

// Function to decrement the counter
function decrement() {
    counter--;
    updateDisplay();
}

// Function to reset the counter
function reset() {
    counter = 0;
    updateDisplay();
}

// Add event listeners once the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('increment-btn').addEventListener('click', increment);
    document.getElementById('decrement-btn').addEventListener('click', decrement);
    document.getElementById('reset-btn').addEventListener('click', reset);
    updateDisplay();
});
