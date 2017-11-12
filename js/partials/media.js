import {removeClassFromMany} from './../modules/functions.js'


/**
 * @function removeActiveOnLaptop
 * removes transition effects and .active class from all collapsable menu elements to hide them if laptop window-width is reached
 */
function removeActiveOnLaptop() {
    var laptop = window.matchMedia('(min-width: 1280px');

    laptop.addListener(function(laptop){

    var menu = document.getElementById("main-menu");
    var about = document.getElementById('about');
    var droppableLink = document.querySelector('.droppable-link');
    var submenu = document.getElementById('submenu');

    
        if (laptop.matches) {
            removeClassFromMany('active', menu, about,droppableLink, submenu);
        }
    });
}


/**
 * @function toggleMenuTransitionEffect
 * Sets the transistion effect on #main-menu element off if the laptop window-width is reached and sets it on 
 */
function toggleMenuTransitionEffect() {
    var laptop = window.matchMedia('(min-width: 1280px');

    laptop.addListener(function(laptop){
        var menu = document.getElementById("main-menu");

        if (laptop.matches) {
            menu.style.transition = 'none';
        }

    });
}

/**
 * @function getInitialWidth
 * @returns {number} window.innerWidth initial width of window
 */
function getInitialWidth() {
    return window.innerWidth
}


/** @function showBoxWrappersOnBigDevices
* Remove .visuallyhidden class from all .box-wrapper elements to show them if the initial window with is more than 767px
* @param {number} width The innerWidth of window
*/
function showBoxWrappersOnBigDevices (width) {
    var boxWrappers = document.querySelectorAll('.box-wrapper');

    if (width > 767) {
        [].forEach.call(boxWrappers, function(wrapper) {
            wrapper.classList.remove('visuallyhidden')
        })
    }

}


/**
 * @function toggleWrappersVisibility
 * Remove .visuallyhidden class from .box-wrapper elements to show them when tablet window width is reached and adds .visuallyhidden class to .box-wrapper elements except the first one to hide them when tablet window width is not reached
 */
function toggleWrappersVisibility() {
    var tablet = window.matchMedia('(min-width: 768px)');
    var boxWrappers = document.querySelectorAll('.box-wrapper');

    tablet.addListener(function(tablet) {
        if (tablet.matches) {
            [].forEach.call(boxWrappers, function(wrapper) {
                wrapper.classList.remove('visuallyhidden')
            });
        } else {
            [].forEach.call(boxWrappers, function(wrapper, i) {
                if(i!==0)
                wrapper.classList.add('visuallyhidden')
            });
        }
    });
}

/**
* @function toggleHeaderAlignRight
* Adds class .align right to header of .summary_part element if the window.innerWidth does not reach tablet breakpoint (min-width: 767px) and removes it if the window.innerWidth reach the breakpoint
*/
function toggleHeaderAlignRight () {
    var width = window.innerWidth;
    var tablet = window.matchMedia('(min-width: 768px)');
    var summaryHeader = document.querySelector(".summary_part header");

    if (width > 767) {
        summaryHeader.classList.add('align_right');
    }

    tablet.addListener(function(tablet) {
        tablet.matches ? summaryHeader.classList.add('align_right') : summaryHeader.classList.remove('align_right');
    });
}

export {removeActiveOnLaptop}
export {toggleMenuTransitionEffect}
export {getInitialWidth};
export {showBoxWrappersOnBigDevices};
export {toggleWrappersVisibility};
export {toggleHeaderAlignRight};