import {switchClass} from './../modules/functions.js'
import {Slider} from './../modules/classes.js'

function runPricelistActiveSwitch () {
    var joinBtns = document.querySelectorAll('.box-btn button');
    var boxWrappers = document.querySelectorAll('.box-wrapper');

    [].forEach.call(joinBtns, function(button) {
        button.addEventListener('click', function(e) {
            var wrapper = button.parentElement.parentElement.parentElement;
            
            if(!wrapper.classList.contains('active')){
                switchClass('active', wrapper, boxWrappers );
            }
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

export {runPricelistActiveSwitch};
export {runPriceListSlider};


