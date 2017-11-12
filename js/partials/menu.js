import {removeClassFromMany} from './../modules/functions.js'
import {toggleClassOnMany} from './../modules/functions.js'
/**
 * @function switchMenu
 * toggles .active class on #main-menu element to show/hide it and removes .active class from submenu elements to hide them if menu does not contain .active class
 */
function switchMenu() {
    var menu = document.getElementById('main-menu');
    var about = document.getElementById('about');
    var droppableLink = document.querySelector('.droppable-link');
    var submenu = document.getElementById('submenu');

    menu.style.transition = 'width 0.2s linear';

    menu.classList.toggle('active');

    if (!menu.classList.contains('active')) {
        removeClassFromMany('active', about, droppableLink, submenu)
    }
}

/**
* @function switchSubenu
* toggles .active class on submenu elements to show/hide them
*/
function switchSubmenu(e) {
    e.preventDefault();
    var about = document.getElementById('about');
    var droppableLink = document.querySelector('.droppable-link');
    var submenu = document.getElementById('submenu');

    toggleClassOnMany('active', about, droppableLink, submenu);
}

function runMenuApp() {
    var hamburger = document.getElementById("hamburger");
    var droppableLink = document.querySelector('.droppable-link');

    hamburger.addEventListener('click', switchMenu);

    droppableLink.addEventListener('click', switchSubmenu);

}

export{runMenuApp}