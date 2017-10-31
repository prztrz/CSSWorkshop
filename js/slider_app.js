document.addEventListener("DOMContentLoaded", function() {
    //get slider elements
	var rightBtn = document.getElementById("right-btn");
	var leftBtn = document.getElementById("left-btn");
	var slides = document.querySelectorAll(".slide");

    /** @function findCurrentActiveElementIndex
    * Finds index element with specified class among DOM elements pseudo array
     *  @param {object} slides Pseudo array with DOM elements
     * @param {string} className, name of class
     * @returns {number} index of element with specified class
     */
    var findCurrentActiveElementIndex = function (elements, className) {
        var currentElementIndex = 0;
        var elementsArray = Array.from(elements)

        for (var i = 0; i < elementsArray.length; i++) {
            if (Array.from(elementsArray[i].classList).indexOf(className) > -1) {
                currentElementIndex = i;
                return currentElementIndex;
            }
        }
    }

    /** @function sliderAutoToggler
    * automatically toggles .active class between elements with .slide class
     *
     */
    var sliderAutoToggler = function () {
            var currentSlideIndex = findCurrentActiveElementIndex(slides, 'active');
            var nextSlideIndex = 0;

            if (currentSlideIndex !== slides.length - 1) {
                var nextSlideIndex = currentSlideIndex+1
            }

            slides[currentSlideIndex].classList.remove('active');
            slides[nextSlideIndex].classList.add('active');
    }

    /** @function intervalSlideAutoToggler
    * @async
    * Runs @function sliderAutoToggler with 3000ms interval
    */
	var intervalSlideAutoToggler = setInterval(sliderAutoToggler, 3000);

    /**Ads click event on rightBtn DOM object
        @listens click
    */
    rightBtn.addEventListener("click", function() {
        //turn intervalSlideAutoToggler off
        clearInterval(intervalSlideAutoToggler);

        /** use @function findCurrentActiveElementIndex to find the index of .slide with .active class amond slides pseudoarray
        */
        var currentSlideIndex = findCurrentActiveElementIndex(slides, 'active');

        //set index of the next slide to be shown in slider to 0
        var nextSlideIndex = 0;

        //if currentSlideIndex is not the highest index in the slides pseudoarray set the nextSlideIndex to currentSlideIndex + 1
        if (currentSlideIndex !== slides.length - 1) {
            var nextSlideIndex = currentSlideIndex+1
        }

        //remove .active class from the currently active slide
        slides[currentSlideIndex].classList.remove('active');

        //add .active class to the next active slide
        slides[nextSlideIndex].classList.add('active');

        /** runs @function slideAutoToggler with 3000ms interval
         * @async
         */
        intervalSlideAutoToggler = setInterval(sliderAutoToggler, 3000);
    });


    /**Ads click event on rightBtn DOM object
        @listens click
    */
    leftBtn.addEventListener("click", function() {
        /** turn @function slideAutoToggler off
        */
        clearInterval(intervalSlideAutoToggler);

        /** use @function findCurrentActiveElementIndex to find the index of .slide with .active class amond slides pseudoarray
        */
        var currentSlideIndex = findCurrentActiveElementIndex(slides, 'active');

        //set index of the next slide to be shown in slider to the highest index in slides pseudoarray
        var nextSlideIndex = slides.length-1;

        //if currentSlideIndex is not 0 set the nextSlideIndex to currentSlideIndex - 1
        if (currentSlideIndex !== 0) {
            nextSlideIndex = currentSlideIndex -1;
        }

        //remove .active class from the currently active slide
        slides[currentSlideIndex].classList.remove('active');

        //add .active class to the next active slide
        slides[nextSlideIndex].classList.add('active');

        /** runs @function slideAutoToggler with 3000ms interval
         * @async
         */
        intervalSlideAutoToggler = setInterval(sliderAutoToggler, 3000);

    });
});
