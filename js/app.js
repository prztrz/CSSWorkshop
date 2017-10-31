document.addEventListener("DOMContentLoaded", function() {
	//get window width
	var width = window.innerWidth;

	//get menu elements
	var hamburger = document.getElementById("hamburger");
	var mainMenu = document.getElementById("main-menu");
	var about = document.getElementById("about");
	var droppableLink = about.firstElementChild;
	var submenu = document.getElementById("submenu");

	//get slider elements
	var rightBtn = document.getElementById("right-btn");
	var leftBtn = document.getElementById("left-btn");
	var slides = document.querySelectorAll(".slide");

	//get pricelist elements
	var boxWrappers = document.querySelectorAll(".box-wrapper");
	var joinBtns = document.querySelectorAll(".box-btn button");
	var priceListRightBtn = document.getElementById("pricelist-right-btn");
	var priceListLeftBtn = document.getElementById("pricelist-left-btn");


	//Laptop media query
	var laptop = window.matchMedia('(min-width: 1280px)');

	//Tablet media querySelector
	var tablet = window.matchMedia ('(min-width: 768px)')

	//Class lists of menu elements
	var menuClasses = mainMenu.classList;
	var aboutClasses = about.classList;
	var droppableLinkClasses = droppableLink.classList;
	var submenuClasses = submenu.classList;

	//when DOM is loaded show boxWrappers (remove .visuallyhiden class) elements when window width is wider tahn 767px;
	if (width > 767) {
		for (var i = 0; i < boxWrappers.length; i++) {
			boxWrappers[i].classList.remove('visuallyhidden')
		}
	}

	/** Function:finds element with specified class
	 *  @param {object} slides, pseudo array with DOM elements
	 	@param {string} className, name of class
	 */
	var findCurrentElement = function (elements, className) {
		var currentElementIndex = 0;
		var elementsArray = Array.from(elements)

		for (var i = 0; i < elementsArray.length; i++) {
			if (Array.from(elementsArray[i].classList).indexOf(className) > -1) {
				currentElementIndex = i;
				return currentElementIndex;
			}
		}
	}
	/** Slider function: utomatically toggles .active class between elements with . slide class
	 *
	 */
	var sliderAutoToggler = function () {
			var currentSlideIndex = findCurrentElement(slides, 'active');
			var nextSlideIndex = 0;

			if (currentSlideIndex !== slides.length - 1) {
				var nextSlideIndex = currentSlideIndex+1
			}

			slides[currentSlideIndex].classList.remove('active');
			slides[nextSlideIndex].classList.add('active');
	}

	//Run sliderAutoToggler
	var intervalSlideAutoToggler = setInterval(sliderAutoToggler, 3000);


	//listener for laptop window width
	laptop.addListener(function(laptop) {

		//If laptop window width is detected
		if (laptop.matches) {
			//remove .active class from menu and submenu elements
			menuClasses.remove('active');
			aboutClasses.remove('active');
			droppableLinkClasses.remove('active');
			submenuClasses.remove('active');

			//set transistion:none to #main-menu element to prevent the transition effect on #main-menu width when laptop widnow width is resized to tablet widths
			mainMenu.style.transition = 'none';

		}
	});

	//listener for tablet window width
	tablet.addListener(function(tablet) {

		//remove .visuallyhidden class from pricelist boxWrappers to show them on tablet and wider screens
		if (tablet.matches) {
			for (var i = 0; i < boxWrappers.length; i++) {
				boxWrappers[i].classList.remove('visuallyhidden') ;
			}
		// if tablet don't march add .visuallyhidden class to all boxWrappers except the first one
		} else {
			for (var i = 1; i < boxWrappers.length; i++) {
				boxWrappers[i].classList.add('visuallyhidden') ;
			}
		}
	});

	//set click event on hamburger menu icon
	hamburger.addEventListener("click", function() {
		// set the transistion effect on #main-menu width
		mainMenu.style.transition = 'width 0.5s linear';

		//toggle class .active on #main-menu element to show/hide main menu
		menuClasses.toggle('active');

		//if .active class was removed from main-menu elements remove .active class from all of its children elements
		if (Array.from(menuClasses).indexOf('active') === -1) {
			aboutClasses.remove('active');
			droppableLinkClasses.remove('active');
			submenuClasses.remove('active');
		}
	});

	//set click event on link containing submenu
	droppableLink.addEventListener('click', function(e) {
		e.preventDefault();

		//toggle class .active on submenu elements to show/hide submenu
		aboutClasses.toggle('active');
		droppableLinkClasses.toggle('active');
		submenuClasses.toggle('active');
	})

	rightBtn.addEventListener("click", function() {
		clearInterval(intervalSlideAutoToggler);
		var currentSlideIndex = findCurrentElement(slides, 'active');
		var nextSlideIndex = 0;

		if (currentSlideIndex !== slides.length - 1) {
			var nextSlideIndex = currentSlideIndex+1
		}

		slides[currentSlideIndex].classList.remove('active');
		slides[nextSlideIndex].classList.add('active');

		intervalSlideAutoToggler = setInterval(sliderAutoToggler, 3000);
	});

	leftBtn.addEventListener("click", function() {
		clearInterval(intervalSlideAutoToggler);
		var currentSlideIndex = findCurrentElement(slides, 'active');
		var nextSlideIndex = slides.length-1;

		if (currentSlideIndex !== 0) {
			nextSlideIndex = currentSlideIndex -1;
		}

		slides[currentSlideIndex].classList.remove('active');
		slides[nextSlideIndex].classList.add('active');

		intervalSlideAutoToggler = setInterval(sliderAutoToggler, 3000);

	});

	//add click events on every button from joinBtns
	for (var i = 0; i < joinBtns.length; i++) {
		joinBtns[i].addEventListener("click", function() {
			//get box wraper parent of clicked joinBtn
			var currentBoxWrapper = this.parentElement.parentElement.parentElement;
			//get array of classes of currentBoxWrapper
			var currentWrapperClasses = Array.from(currentBoxWrapper.classList);
			//if there is no .active class on currentBoxWrapper
			if (currentWrapperClasses.indexOf('active') === -1) {
				//remove .active class from all boxWrappers
				for (var i = 0; i < boxWrappers.length; i++) {
					boxWrappers[i].classList.remove('active')
				}

				//then add .active class on currentBoxWrapper
				currentBoxWrapper.classList.add('active')
			}
		});
	}

	//add click event on pricelist right button
	priceListRightBtn.addEventListener("click", function() {
		var currentWrapperIndex = 0;
		var nextWrapperIndex = 0;

		for (var i = 0; i < boxWrappers.length; i++) {
			if (Array.from(boxWrappers[i].classList).indexOf('visuallyhidden') === -1) {
				currentWrapperIndex = i;
			}
		}


		if (currentWrapperIndex !== boxWrappers.length - 1) {
			var nextWrapperIndex = currentWrapperIndex+1
		}

		boxWrappers[currentWrapperIndex].classList.add('visuallyhidden');
		boxWrappers[nextWrapperIndex].classList.remove('visuallyhidden');
	});

	//add click event on pricelist right button
	priceListLeftBtn.addEventListener("click", function() {
		var currentWrapperIndex = 0;
		var nextWrapperIndex = boxWrappers.length-1;

		for (var i = 0; i < boxWrappers.length; i++) {
			if (Array.from(boxWrappers[i].classList).indexOf('visuallyhidden') === -1) {
				currentWrapperIndex = i;
			}
		}


		if (currentWrapperIndex !== 0) {
			var nextWrapperIndex = currentWrapperIndex-1
		}

		boxWrappers[currentWrapperIndex].classList.add('visuallyhidden');
		boxWrappers[nextWrapperIndex].classList.remove('visuallyhidden');
	});
});
