import {AutoSlider} from './../modules/classes.js'

function runSlider() {
    var slides = document.querySelectorAll('.slide');
    var leftBtn = document.getElementById('left-btn');
    var rigthBtn = document.getElementById('right-btn');

    var mainSlider = new AutoSlider(slides, 'active', true, 'right', 3000);

    mainSlider.autoToggle;

    leftBtn.addEventListener('click', mainSlider.slideLeft.bind(mainSlider));

    rigthBtn.addEventListener('click', mainSlider.slideRight.bind(mainSlider));
}

export {runSlider}
