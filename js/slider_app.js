document.addEventListener('DOMContentLoaded', function(e) {
    class Slider {
        constructor (collection, switchableClass, classActivate) {
            this.collection = collection;
            this.switchableClass = switchableClass;
            this.classActivate = classActivate;
        }

        slideRight() {
            var currentElementIndex = 0;
            var nextElementIndex = 0

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

    class AutoSlider extends Slider {
        constructor (collection, switchableClass, classActivate, direction, interval) {
            super(collection, switchableClass, classActivate);
            this.direction = direction;
            this.interval = interval;
        }

        slideRight() {
            clearInterval(this.intervalId);
            super.slideRight();
            this.autoToggle();

        }

        slideLeft() {
            clearInterval(this.intervalId);
            super.slideLeft();
            this.autoToggle();
        }

        autoToggle() {         
            var self = this;
            if (this.direction === 'left'){
                this.intervalId = setInterval(self.slideLeft.bind(self), self.interval);
            } else {
                this.intervalId = setInterval(self.slideRight.bind(self), self.interval)
            }
        }
    }

    function runSlider() {
        var slides = document.querySelectorAll('.slide');
        var leftBtn = document.getElementById('left-btn');
        var rigthBtn = document.getElementById('right-btn');

        var mainSlider = new AutoSlider(slides, 'active', true, 'right', 3000);

        mainSlider.autoToggle;

        leftBtn.addEventListener('click', mainSlider.slideLeft.bind(mainSlider));

        rigthBtn.addEventListener('click', mainSlider.slideRight.bind(mainSlider));
    }

    runSlider();

});