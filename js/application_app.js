document.addEventListener("DOMContentLoaded", function() {
    //get elements
    var listArrows = document.querySelectorAll(".list_arrow");

    var summaryTitle = document.getElementById("title-item");
    var colorSpan = document.getElementById("color-span");
    var patternSpan = document.getElementById("pattern-span");
    var transportSpan = document.getElementById("transport-span");
    var transportCheckBox = document.getElementById("transport");

    var titlePrice = document.getElementById("title-price");
    var colorPrice = document.getElementById("color-price");
    var patternPrice = document.getElementById("pattern-price");
    var transportPrice = document.getElementById("transport-price");

    var sum = document.querySelector(".sum > strong");


    /**
     * Object
     * @name globalPrice
     * Represents full price of the user's order, based on the  fields titlePrice, colorPrice, patternPrice and transportPrice representinc price of chair model, price of given color, pattern and transport respectively
     */

    var globalPrice = {
        titlePrice: 0,
        colorPrice: 0,
        patternPrice: 0,
        transportPrice: 0,
        /** @function calculate
         * Sums every value of @name globalPrice object if type of the value is number
         * @returns {number} full price of the user's order
         */
        calculate: function () {
            var values = Object.values(this);
            var result = 0;
            values.forEach(function(x){
                if (typeof x === 'number') {
                    result += x;
                }
            });

            return result;
        }
    }


    /**add click event to all elements with .list_arrow class
    * @listens click
    */
    for (var i = 0; i < listArrows.length; i++) {
        listArrows[i].addEventListener("click", function() {
            /**
             * @this object DOM with .listArrows class
             */
            var currentList = this.parentElement.querySelector('.list_panel');
            var currentListClasses = currentList.classList;

            var currentListItems = currentList.children;

            currentListClasses.toggle('visible')

            /** add click event to every <li> object which is the child of the same parent as @this
             * @listens click
             */
            for (var i = 0; i < currentListItems.length; i++) {
                currentListItems[i].addEventListener("click", function() {
                    var currentClasses = this.classList;

                    /** Represents every <li> item with the same parent including the clicked item
                     *  @this object <li>
                     */
                    var siblingItems = this.parentElement.children;

                    //Label of list the clicked elements is part of.
                    var currentLabel = this.parentElement.parentElement.firstElementChild;

                    //Represents the value of data-price attribute of clicked <li> object
                    var currentPrice = this.dataset.price;

                    //Represents the value of data-category attribute of clicked <li> object
                    var currentCategory = this.parentElement.dataset.category;

                    //If the clicked <li> does not have .selected class
                    if (Array.from(currentClasses).indexOf('selected') === -1) {
                        //remove selected class from all <li> objects of the same parent
                        for (var i = 0; i < siblingItems.length; i++) {
                            siblingItems[i].classList.remove('selected');
                        }

                        /**add .selected class to @this
                        *
                        */
                        currentClasses.add('selected');

                        //Put innerText of selected item to the label and change its color to #000
                        currentLabel.innerText = this.innerText;
                        currentLabel.style.color = '#000';
                    }

                    /** Dependind on value of data-category attribute of clicked list change the corresponding fields in summary pannel and corresponding field of globalPrice object.
                    *
                    */
                    switch (currentCategory) {
                        case 'chair-list':
                            summaryTitle.innerText = this.innerHTML;
                            titlePrice.innerText = this.dataset.price;
                            globalPrice.titlePrice = parseInt(currentPrice);
                        break;

                        case 'color-list':
                            colorSpan.innerText = this.innerHTML;
                            colorPrice.innerText = this.dataset.price;
                            globalPrice.colorPrice = parseInt(currentPrice);
                        break;

                        case 'pattern-list':
                            patternSpan.innerText = this.innerHTML;
                            patternPrice.innerText = this.dataset.price;
                            globalPrice.patternPrice = parseInt(currentPrice);
                        break;
                    }

                    // put calculated global price of order to sum DOM object
                    sum.innerText = globalPrice.calculate();

                    //drop up the clicked <ul> list
                    currentListClasses.remove('visible');


                });
            }
        });
    }

    /** add click event to check box with transport
     * @listens click
     */
    transportCheckBox.addEventListener("click", function() {
        //represents the value of data-transport-price attribute of the clicked checkbox
        var currentPrice = this.dataset.transportPrice;

        //if the checkbox is checked due to the click
        if (transportCheckBox.checked) {
            //put the value of data-transport-price attribute to the corresponding field in globalPrice object
            globalPrice.transportPrice = parseInt(currentPrice);
            //put the 'Transport' string to corresponding DOM object in summaryPannel
            transportSpan.innerText = 'Transport';
            //put the transport price to corresponding DOM object in summaryPannel
            transportPrice.innerText = currentPrice;

        // if the checkbox is unchecked due to the click
        } else {
            // set transport price to 0
            globalPrice.transportPrice = 0;
            //remove strings from corresponding DOM objects
            transportSpan.innerText = '';
            transportPrice.innerText = '';
        }
        
        // put calculated global price of order to sum DOM object
        sum.innerText = globalPrice.calculate();
    });
});
