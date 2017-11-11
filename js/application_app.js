document.addEventListener("DOMContentLoaded", function() {
    /**
    * Represents global price of the user's order
    */
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
    * @function toggleHeaderAlignRight
    * Adds class .align right to header of .summary_part element if the window.innerWidth does not reach tablet breakpoint (min-width: 767px) and removes it if the window.innerWidth reach the breakpoint
    */
    function toggleHeaderAlignRight () {
        var width = window.innerWidth;
        var tablet = window.matchMedia('(min-width: 768px)');
        var summaryHeader = document.querySelector(".summary_part header");

        if (width > 767) {
            summaryHeader.classList.add('align_right');
        }

        tablet.addListener(function(tablet) {
            tablet.matches ? summaryHeader.classList.add('align_right') : summaryHeader.classList.remove('align_right');
        });
    }


    /**
    * @function toggleListItemsVisibility
    * toggles class .visible on <li> objects.
    * @param {object} it - DOM object
    */
    function toggleListItemsVisibility (it) {
        var currentList = it.parentElement.querySelector('.list_panel');
        var currentListClasses = currentList.classList;

        currentListClasses.toggle('visible');
    }


    /**
    * @function isSelected
    * @param {string} element DOM object
    * @returns {boolean} true if element object contains .selected class and false if not
    */
    function isSelected (element) {
        if (element.classList.contains('selected')) {
            return true;
        } else {
            return false;
        }
    }


    /**
    * @function switchSelection
    * removes .selected class from all <li> of the current list and adds .selected class to the clicked <li>
    * @param {object} element DOM object
    */
    function switchSelection(element) {
        var listItems = element.parentElement.children;

        for (var i = 0; i < listItems.length; i++) {
            listItems[i].classList.remove('selected')
        }

        element.classList.add('selected');
    }


    /**
    * @function updateLabel()
    * Switches the the innerText of .list_label element to currently selected list item.
    * @param {object} it - DOM object
    */
    function updateLabel(it) {
        var currentLabel = it.parentElement.parentElement.firstElementChild;
        currentLabel.innerText = it.innerText;
        currentLabel.style.color = '#000';
    }


    /**
    * @function updateSummaryPanelFields
    * Changes the innerText fields of corresponding element in .summary_panel class depending on selected item
    * @param {object} it - DOM object passed to the function - item with .selected class
    * @param {string} category - value of attribute data-category of it
    */
    function updateSummaryPanelFields(it, category) {

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
                summaryTitle.innerText = it.innerHTML;
                titlePrice.innerText = it.dataset.price;
                globalPrice.titlePrice = parseInt(it.dataset.price);
            break;

            case 'color-list':
                colorSpan.innerText = it.innerHTML;
                colorPrice.innerText = it.dataset.price;
                globalPrice.colorPrice = parseInt(it.dataset.price);
            break;

            case 'pattern-list':
                patternSpan.innerText = it.innerHTML;
                patternPrice.innerText = it.dataset.price;
                globalPrice.patternPrice = parseInt(it.dataset.price);
            break;

            case 'transport':
                transportSpan.innerText = 'Transport';
                transportPrice.innerText = it.dataset.price;
                globalPrice.transportPrice = parseInt(it.dataset.price);
        }

        sum.innerText = globalPrice.calculate();
    }


    /**
    * @function resetSummaryPanelFields
    * Clears fields of element in .summary_panel class if list item was unchecked
    * @param {object} it  DOM object passed to the function - list item with .selected class
    * @param {string} category - value of attribute data-category of it
    */
    function resetSummaryPanelFields(it, category) {

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

        for (var i = 0; i < listArrows.length; i++) {
            listArrows[i].addEventListener("click", function () {
                toggleListItemsVisibility(this);
            })
        }

        for (var i = 0; i < listItems.length; i++) {
            listItems[i].addEventListener("click", function() {
                if (!isSelected(this)) {
                    switchSelection(this);
                    updateLabel(this);
                    updateSummaryPanelFields(this, this.parentElement.dataset.category)
                }

                toggleListItemsVisibility(this.parentElement);

            })
        }

        transportCheckBox.addEventListener("click", function() {
            if (this.checked) {
                updateSummaryPanelFields(this, this.dataset.category);
            } else {
                resetSummaryPanelFields(this, this.dataset.category);
            }
        });

    }

    runApplication();

});
