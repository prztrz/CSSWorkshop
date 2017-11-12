import {switchClass} from './../modules/functions.js'
import {cloneInnerTextTo} from './../modules/functions.js'


var globalPrice = {
    titlePrice: 0,
    colorPrice: 0,
    patternPrice: 0,
    transportPrice: 0,
    calculate: function () {
        return this.titlePrice + this.colorPrice + this.patternPrice + this.transportPrice;
    }
}


/**
* @function updateSummaryPanelFields
* Changes the innerText fields of corresponding element in .summary_panel class depending on selected item
* @param {object} element - DOM Object
* @param {string} category - value of attribute data-category of it
*/
function updateSummaryPanelFields(element, category) {

    var summaryTitle = document.getElementById("title-item");
    var titlePrice = document.getElementById("title-price");

    var colorSpan = document.getElementById("color-span");
    var colorPrice = document.getElementById("color-price");

    var patternSpan = document.getElementById("pattern-span");
    var patternPrice = document.getElementById("pattern-price");

    var transportSpan = document.getElementById("transport-span");
    var transportPrice = document.getElementById("transport-price");

    var sum = document.querySelector(".sum > strong");

    switch (category) {
        case 'chair-list':
            summaryTitle.innerText = element.innerHTML
            titlePrice.innerText = element.dataset.price;
            globalPrice.titlePrice = parseInt(element.dataset.price);
        break;

        case 'color-list':
            colorSpan.innerText = element.innerHTML;
            colorPrice.innerText = element.dataset.price;
            globalPrice.colorPrice = parseInt(element.dataset.price);
        break;

        case 'pattern-list':
            patternSpan.innerText = element.innerHTML
            patternPrice.innerText = element.dataset.price;
            globalPrice.patternPrice = parseInt(element.dataset.price);
        break;

        case 'transport':
            transportSpan.innerText = 'Transport';
            transportPrice.innerText = element.dataset.price;
            globalPrice.transportPrice = parseInt(element.dataset.price);
    }

    sum.innerText = globalPrice.calculate();
}


/**
* @function resetSummaryPanelFields
* Clears fields of element in .summary_panel class if list item was unchecked
* @param {string} category - value of attribute data-category of it
*/
function resetSummaryPanelFields(category) {

    var summaryTitle = document.getElementById("title-item");
    var titlePrice = document.getElementById("title-price");

    var colorSpan = document.getElementById("color-span");
    var colorPrice = document.getElementById("color-price");

    var patternSpan = document.getElementById("pattern-span");
    var patternPrice = document.getElementById("pattern-price");

    var transportSpan = document.getElementById("transport-span");
    var transportPrice = document.getElementById("transport-price");

    var sum = document.querySelector(".sum > strong");

    switch (category) {
        case 'chair-list':
            summaryTitle.innerText = '';
            titlePrice.innerText = '';
            globalPrice.titlePrice = 0;
        break;

        case 'color-list':
            colorSpan.innerText = '';
            colorPrice.innerText = '';
            globalPrice.colorPrice = 0;
        break;

        case 'pattern-list':
            patternSpan.innerText = '';
            patternPrice.innerText = '';
            globalPrice.patternPrice = 0;
        break;

        case 'transport':
            transportSpan.innerText = '';
            transportPrice.innerText = '';
            globalPrice.transportPrice = 0;
    }

    sum.innerText = globalPrice.calculate();
}


/**
* @function runApplication
* runs application of section with .application class
* Listens 'click' event on elements with .list_arrow class
* Listens 'click event on <li> elements inside element with .form class
*/
function runApplication () {
    var listArrows = document.querySelectorAll(".list_arrow");
    var listItems = document.querySelectorAll(".form li");
    var transportCheckBox = document.getElementById("transport");

    [].forEach.call(listArrows, function(listArrow) {
        listArrow.addEventListener("click", function () {
            var ul = this.parentElement.querySelector('.list_panel');
            ul.classList.toggle('visible');
        })
    })


    Array.prototype.forEach.call(listItems, function(listItem) {
        listItem.addEventListener("click", function() {
            var listLabel = this.parentElement.parentElement.querySelector('.list_label');
            if (!this.classList.contains('selected')) {
                switchClass('selected', this, listItems)
                listLabel.innerText = this.innerHTML;
                listLabel.style.color= '#000';
                updateSummaryPanelFields(this, this.parentElement.dataset.category)
            }

            this.parentElement.classList.toggle('visible');

        })
    })

    transportCheckBox.addEventListener("click", function() {
        if (this.checked) {
            updateSummaryPanelFields(this, this.dataset.category);
        } else {
            resetSummaryPanelFields(this.dataset.category);
        }
    });

}

export {runApplication};

