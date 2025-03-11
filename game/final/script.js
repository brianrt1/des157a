// Select all overlay buttons (in your case, it's .overlay-4)
const keyButtons = document.querySelectorAll('.overlay-4');

// Use a for loop to iterate through each button
for (let i = 0; i < keyButtons.length; i++) {
    // Add event listener for each button
    keyButtons[i].addEventListener('click', function() {
        // Hide the button when clicked
        this.style.display = 'none';
    });
}

// Select the element that should trigger the overlay
const keypadActive = document.querySelector('.keypad-active');

// Select the splash-2 overlay
const splash2 = document.getElementById('splash-2');

// Add an event listener for the click event on .keypad-active
keypadActive.addEventListener('click', function() {
    // Change the display property of #splash-2 to make it visible
    splash2.style.display = 'block';
});

// Select the element that should trigger the overlay
const keypadClose = document.querySelector('.back-btn');

// Select the splash-2 overlay
const splash3 = document.getElementById('splash-2');

// Add an event listener for the click event on .keypad-active
keypadClose.addEventListener('click', function() {
    // Change the display property of #splash-2 to make it visible
    splash3.style.display = 'none';
});

// Track the number of times the "0" key is pressed
let zeroPressCount = 0;

// Select the "0" button
const btn0 = document.getElementById('btn-0');

// Select the overlay elements to be toggled
const overlay2 = document.querySelector('.overlay-2');
const overlay4 = document.querySelector('.overlay-4');

// Add event listener for the "0" button
btn0.addEventListener('click', function() {
    zeroPressCount++;

    // If the "0" button is pressed 4 times
    if (zeroPressCount === 4) {
        // Set both overlays to display as block
        overlay2.style.display = 'block';
        overlay4.style.display = 'block';
    }
});
