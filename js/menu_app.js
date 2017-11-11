document.addEventListener('DOMContentLoaded', function(e){

    /**
    * @function removeClass 
    * removes specified class from specified element(s)
    * @param {string} classString - class
    * @param {Array} elements - DOM object array
    */
    function removeClass(classString, ...elements) {
        elements.forEach(function(el) {
            el.classList.remove(classString)
        })
    }


    /**
     * @function toggleClass 
     * toggles specified class on specified element(s)
     * @param {string} classString - class
     * @param {Array} elements - DOM object array
     */
    function toggleClass(classString, ...elements) {
        elements.forEach(function(el) {
            el.classList.toggle(classString)
        })
    }

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
                removeClass('active', menu, about,droppableLink, submenu);
           }
       });
    }


    /**
     * @function toggleMenuTransitionEffect
     * Sets the transistion effect on #main-menu element off if the laptop window-width is reached and sets it on 
     */
    function toggleMenuTransistionEffect() {
        var laptop = window.matchMedia('(min-width: 1280px');

        laptop.addListener(function(laptop){
            var menu = document.getElementById("main-menu");

            if (laptop.matches) {
                menu.style.transition = 'none';
            }

        });
    }

  

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

        toggleClass('active', menu);

        if (!menu.classList.contains('active')) {
           removeClass('active', about, droppableLink, submenu)
        }
    }

    /**
    * @function switchSubenu
    * toggles .active class on submenu elements to show/hide them
    */
    function switchSubmenu() {
        var about = document.getElementById('about');
        var droppableLink = document.querySelector('.droppable-link');
        var submenu = document.getElementById('submenu');

        toggleClass('active', about, droppableLink, submenu);
    }

    function runMenuApp() {
        var hamburger = document.getElementById("hamburger");
        var droppableLink = document.querySelector('.droppable-link');

        hamburger.addEventListener('click', switchMenu);

        droppableLink.addEventListener('click', function(e) {
            e.preventDefault();
            switchSubmenu();
        });

    }

    removeActiveOnLaptop();
    toggleMenuTransistionEffect();
    runMenuApp();

})