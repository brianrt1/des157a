"use strict";

window.addEventListener('scroll', function() {
    if (window.scrollY >= 1000) {
        document.querySelector('.taskbar').style.opacity = 0;
    } else {
        document.querySelector('.taskbar').style.opacity = 1;
    }

    
   
    document.addEventListener('mousemove', reportPos);

    function reportPos(event) {

            const xPos = event.clientX;
            const yPos = event.clientY;
          
    }
});