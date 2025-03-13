
(function() {

// Click key once

const keyButton = document.querySelectorAll('.overlay-4');
for (let i = 0; i < keyButton.length; i++) {
    keyButton[i].addEventListener('click', function() {
        this.style.display = 'none';
    });
}



// Simple Overlay Handlers

const lampActive = document.querySelector('.lamp-active');
const lampOverlay = document.querySelector('.overlay-1');
let lampSwitch = new Audio('audio/light-on.mp3');
lampActive.addEventListener('click', function() {
    lampOverlay.style.display = 'block';
    lampSwitch.play();
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

const stereoActive = document.querySelector('.stereo-active');
const stereoOverlay = document.querySelector('.overlay-6');
let stereoPlay = new Audio('audio/song-final.mp3');
stereoActive.addEventListener('click', function() {
    stereoOverlay.style.display = 'block';
    stereoPlay.play();
});

const bookActive = document.querySelector('.book-active');
const bookOverlay = document.querySelector('.overlay-5');
let pageFlip = new Audio('audio/book-flip.mp3');
bookActive.addEventListener('click', function() {
    bookOverlay.style.display = 'block';
    pageFlip.play();
});

const pictureActive = document.querySelector('.picture-active');
const pictureOverlay = document.querySelector('.overlay-7');
let glassBreak = new Audio('audio/glass-break.mp3');

pictureActive.addEventListener('click', function() {
    pictureOverlay.style.display = 'block';
    glassBreak.play();
});


//KEYPAD

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

//DOOR CHECK

const doorCheck = document.querySelector('.door-active');
const overlayA = document.querySelector('.overlay-3');
const overlayB = document.querySelector('.overlay-2');
const overlayC = document.querySelector('.overlay-4');

doorCheck.addEventListener('click', function() {
    if (overlayB.style.display === 'block' && overlayC.style.display === 'none') {
        overlayA.style.display = 'block';
        endGame();
    }
});


//GAME START

const playButton = document.querySelector('#splash-3 a');
const splashScreen = document.getElementById('splash-3');


playButton.addEventListener('click', function(event) {
    event.preventDefault();
    splashScreen.style.display = 'none';
});

//GAME OVER


const overlayThree = document.querySelector('.overlay-3');
const splashFour = document.getElementById('splash-4');

function endGame() {
    splashFour.style.display = 'block';
    overlay3.style.display = 'block';
}

//PLAY AGAIN

document.getElementById('play-again').addEventListener('click', function (event) {
    event.preventDefault();
    location.reload();
});

})();