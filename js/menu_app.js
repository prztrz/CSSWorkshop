document.addEventListener("DOMContentLoaded", function() {
    //get menu elements
    var hamburger = document.getElementById("hamburger");
    var mainMenu = document.getElementById("main-menu");
    var about = document.getElementById("about");
    var droppableLink = about.firstElementChild;
    var submenu = document.getElementById("submenu");

    //Class lists of menu elements
    var menuClasses = mainMenu.classList;
    var aboutClasses = about.classList;
    var droppableLinkClasses = droppableLink.classList;
    var submenuClasses = submenu.classList;

    //Laptop media query
	var laptop = window.matchMedia('(min-width: 1280px)');

    /**
     * @listens matchMedia laptop
     */
	laptop.addListener(function(laptop) {

		//If laptop window width is detected
		if (laptop.matches) {
			//remove .active classes from menu and submenu elements showing the navigation menu on small devices
			menuClasses.remove('active');
			aboutClasses.remove('active');
			droppableLinkClasses.remove('active');
			submenuClasses.remove('active');

			//set transistion:none to #main-menu element to prevent the transition effect on #main-menu width when laptop widnow width is resized to smaller devices width
			mainMenu.style.transition = 'none';

		}

	});

    /** Adds click event on hamburger menu icon
     * @listens click
     */
     hamburger.addEventListener("click", function() {

         // set the transistion effect on #main-menu width
         mainMenu.style.transition = 'width 0.5s linear';

         //toggle class .active on #main-menu element to show/hide main menu
         menuClasses.toggle('active');

         //if .active class was removed from main-menu elements remove .active class from all of its children elements to hide them
         if (Array.from(menuClasses).indexOf('active') === -1) {
             aboutClasses.remove('active');
             droppableLinkClasses.remove('active');
             submenuClasses.remove('active');
         }
     });

     /** Adds click event on link containing submenu
     *  @listens click
     */
     droppableLink.addEventListener('click', function(e) {
         e.preventDefault();

         //toggle class .active on submenu elements to show/hide submenu
         aboutClasses.toggle('active');
         droppableLinkClasses.toggle('active');
         submenuClasses.toggle('active');
     })

});
