document.addEventListener("DOMContentLoaded", function() {
    //get window width
	var initialWidth = window.innerWidth;

    //get pricelist elements
	var boxWrappers = document.querySelectorAll(".box-wrapper");
	var joinBtns = document.querySelectorAll(".box-btn button");
	var priceListRightBtn = document.getElementById("pricelist-right-btn");
	var priceListLeftBtn = document.getElementById("pricelist-left-btn");

    //Tablet media query
	var tablet = window.matchMedia ('(min-width: 768px)')

    /** @function showBoxWrappersOnBigDevices
     * Remove .visuallyhidden class from .box-wrapper elements to show them if the initial window with is more than 767px
     * @param {number} width The initial width of window
     */
    var showBoxWrappersOnBigDevices = function(width) {
        if (width > 767) {
            for (var i = 0; i < boxWrappers.length; i++) {
                boxWrappers[i].classList.remove('visuallyhidden')
            }
        }
    }

    /** run @function showBoxWrappersOnBigDevices
     * @argument {number} initialWidth Initial window width
     */
    showBoxWrappersOnBigDevices(initialWidth);

    /**
     * @listens matchMedia tablet
     */
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


    for (var i = 0; i < joinBtns.length; i++) {

        /**Add click event on joinBtns
         * @listens click
         */
        joinBtns[i].addEventListener("click", function() {
            /**get box wraper parent of clicked joinBtn
                @this joinBtn
            */
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

    /**add click event on pricelist right button
    *   @listens click
    */
	priceListRightBtn.addEventListener("click", function() {
        //set the wrapper on witch button was clicked and the next wrapper indexes to 0
		var currentWrapperIndex = 0;
		var nextWrapperIndex = 0;

        //Find the index of current visible wrapper (the one without .visuallyhidden class) and set adjust currentWrapperIndex to it
		for (var i = 0; i < boxWrappers.length; i++) {
			if (Array.from(boxWrappers[i].classList).indexOf('visuallyhidden') === -1) {
				currentWrapperIndex = i;
			}
		}

        //if currentWrapperIndex is not the highest index in the boxWrappers pseudoarray set nextWrapperIndex to currentWrapperIndex +1
		if (currentWrapperIndex !== boxWrappers.length - 1) {
			var nextWrapperIndex = currentWrapperIndex+1
		}

        //hide current visible wrapper by adding class .visuallyhidden to its classList
		boxWrappers[currentWrapperIndex].classList.add('visuallyhidden');

        //show next wrapper by removing class .visuallyhidden from it
		boxWrappers[nextWrapperIndex].classList.remove('visuallyhidden');
	});

    /**add click event on pricelist left button
    *   @listens click
    */
	priceListLeftBtn.addEventListener("click", function() {
        /**add click event on pricelist right button
        *   @listens click
        */
		var currentWrapperIndex = 0;
		var nextWrapperIndex = boxWrappers.length-1;

        //Find the index of current visible wrapper (the one without .visuallyhidden class) and set adjust currentWrapperIndex to it
		for (var i = 0; i < boxWrappers.length; i++) {
			if (Array.from(boxWrappers[i].classList).indexOf('visuallyhidden') === -1) {
				currentWrapperIndex = i;
			}
		}

        //if currentWrapperIndex is not 0 set nextWrapperIndex to currentWrapperIndex -1
		if (currentWrapperIndex !== 0) {
			var nextWrapperIndex = currentWrapperIndex-1
		}

        //hide current visible wrapper by adding class .visuallyhidden to its classList
		boxWrappers[currentWrapperIndex].classList.add('visuallyhidden');

        //show next wrapper by removing class .visuallyhidden from it
		boxWrappers[nextWrapperIndex].classList.remove('visuallyhidden');
	});
});
