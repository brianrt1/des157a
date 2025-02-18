"use strict";

document.addEventListener("DOMContentLoaded", function () {
    var styleElement = document.createElement("style");
    styleElement.innerHTML = 
        `#hover:hover {
            cursor: pointer;
        }
        #hover:hover .card-title {
            text-decoration: underline;
        }`;
});

/* stack images

fade animation on hover between images

move based on mouse
 */
