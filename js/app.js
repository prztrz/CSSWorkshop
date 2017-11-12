import {removeActiveOnLaptop, toggleMenuTransitionEffect, getInitialWidth, showBoxWrappersOnBigDevices, toggleWrappersVisibility, toggleHeaderAlignRight} from './partials/media.js';
import {runMenuApp} from './partials/menu.js';
import {runSlider} from './partials/slider.js'
import {runPricelistActiveSwitch, runPriceListSlider} from './partials/pricelist.js'
import {runApplication} from './partials/application.js'

document.addEventListener('DOMContentLoaded', function(e) {
    removeActiveOnLaptop();
    toggleMenuTransitionEffect();
    showBoxWrappersOnBigDevices(getInitialWidth());
    toggleWrappersVisibility();
    toggleHeaderAlignRight();

    runMenuApp();
    runSlider();
    runPricelistActiveSwitch();
    runPriceListSlider();
    runApplication();
});