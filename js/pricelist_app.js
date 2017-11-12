document.addEventListener('DOMContentLoaded', function(e) {
    
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
     * @function switchClass
     * Removes specified class from all given node element collections and adds this class to given element from this collection
     * @param {string} classString -name of class
     * @param {object} currentElement - element the clas is added to
     * @param {object} elements - collection of elements the class is removed from
     */
    function switchClass(classString, currentElement, elements) {
        
        if (!currentElement.classList.contains(classString)) {
            [].forEach.call(elements, function(element) {
                removeClass(classString, element);
            });

            currentElement.classList.add(classString);
        }
    }


    /**
     * @class Slider
     * Represent sliders working by adding and removing specific class between slided elements
     * @method constructor
     * @param {object} collection - node collection of slided elements
     * @param {string} switchableClass - name of class switched trough collection
     * @param {boolean} classActivate - true if adding switchableClass shows the slided element adn false if it hides it.
     * 
     * @method slideRight
     * Shows next slide from the right side
     * 
     * @method slideLeft
     * Shows next slide from the left side;
     */
    class Slider {
        constructor (collection, switchableClass, classActivate) {
            this.collection = collection;
            this.switchableClass = switchableClass;
            this.classActivate = classActivate;
        }

        slideRight() {
            var currentElementIndex = 0;
            var nextElementIndex = 0;

            if (this.classActivate) {
                [].forEach.call(this.collection, (element, i) => {
                    if (element.classList.contains(this.switchableClass)){
                        currentElementIndex = i;
                    }
                })

            } else {
                [].forEach.call(this.collection, (element, i) => {
                    if (!element.classList.contains(this.switchableClass)){
                        currentElementIndex = i;
                    }
                });
            }

            if (currentElementIndex !== this.collection.length-1) {
                nextElementIndex = currentElementIndex +1
            }


            if(this.classActivate) {
                this.collection[currentElementIndex].classList.remove(this.switchableClass);
                this.collection[nextElementIndex].classList.add(this.switchableClass);
            } else {
                this.collection[currentElementIndex].classList.add(this.switchableClass);
                this.collection[nextElementIndex].classList.remove(this.switchableClass);
            }
        }

        slideLeft() {
            var currentElementIndex = 0;
            var nextElementIndex = this.collection.length - 1;

            if (this.classActivate) {
                [].forEach.call(collection, (element, i) => {
                    if (element.classList.contains(this.switchableClass)){
                        currentElementIndex = i;
                    }
                })

            } else {
                [].forEach.call(this.collection, (element, i) => {
                    if (!element.classList.contains(this.switchableClass)){
                        currentElementIndex = i;
                    }
                });
            }

            if (currentElementIndex !== 0) {
                nextElementIndex = currentElementIndex - 1;
            }

            if(this.classActivate) {
                this.collection[currentElementIndex].classList.remove(this.switchableClass);
                this.collection[nextElementIndex].classList.add(this.switchableClass);
            } else {
                this.collection[currentElementIndex].classList.add(this.switchableClass);
                this.collection[nextElementIndex].classList.remove(this.switchableClass);
            }

        }
    }

    function runPricelistActiveSwitch () {
        var joinBtns = document.querySelectorAll('.box-btn button');
        var boxWrappers = document.querySelectorAll('.box-wrapper');

        [].forEach.call(joinBtns, function(button) {
            button.addEventListener('click', function(e) {
                switchClass('active', button.parentElement.parentElement.parentElement, boxWrappers );
            });
        })
    }

    function runPriceListSlider () {
        var boxWrappers = document.querySelectorAll('.box-wrapper');
        var rightBtn = document.getElementById("pricelist-right-btn");
        var leftBtn = document.getElementById("pricelist-left-btn");

        var slider = new Slider(boxWrappers, 'visuallyhidden', false);

        rightBtn.addEventListener('click', slider.slideRight.bind(slider));
        leftBtn.addEventListener('click', slider.slideLeft.bind(slider));

    }

    showBoxWrappersOnBigDevices(getInitialWidth());
    toggleWrappersVisibility();
    runPricelistActiveSwitch();
    runPriceListSlider();


});