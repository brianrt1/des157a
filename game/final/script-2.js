const keyButton = document.querySelectorAll('.overlay-4');


for (let i = 0; i < keyButton.length; i++) {
    keyButton[i].addEventListener('click', function() {
        this.style.display = 'none';
    });
}


const lampActive = document.querySelector('.lamp-active');
const lampOverlay = document.querySelector('.overlay-1');
lampActive.addEventListener('click', function() {
    lampOverlay.style.display = 'block';
});

const keypadActive = document.querySelector('.keypad-active');
const splash2 = document.getElementById('splash-2');
keypadActive.addEventListener('click', function() {
    splash2.style.display = 'block';
});

const keypadClose = document.querySelector('.back-btn');
const splash3 = document.getElementById('splash-2');
keypadClose.addEventListener('click', function() {
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


const doorActive = document.querySelector('.door-active');
const overlay3 = document.querySelector('.overlay-3');


doorActive.addEventListener('click', function() {
    // Check if .overlay-2 is visible and .overlay-4 is not
    if (getComputedStyle(overlay2).display === 'block' && getComputedStyle(overlay4).display === 'none') {
        // Set the display of .overlay-3 to block
        overlay3.style.display = 'block';
    }
});
