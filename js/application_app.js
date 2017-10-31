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

    var globalPrice = {
        titlePrice: 0,
        colorPrice: 0,
        patternPrice: 0,
        transportPrice: 0,
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


    //add click event to all elements with .list_arrow class
    for (var i = 0; i < listArrows.length; i++) {
        listArrows[i].addEventListener("click", function() {
            var currentList = this.parentElement.querySelector('.list_panel');
            var currentListClasses = currentList.classList;

            var currentListItems = currentList.children;

            currentListClasses.toggle('visible')

            for (var i = 0; i < currentListItems.length; i++) {
                currentListItems[i].addEventListener("click", function() {
                    var currentClasses = this.classList;
                    var siblingItems = this.parentElement.children;
                    var currentLabel = this.parentElement.parentElement.firstElementChild;
                    var currentPrice = this.dataset.price;
                    var currentCategory = this.parentElement.dataset.category;

                    if (Array.from(currentClasses).indexOf('selected') === -1) {
                        for (var i = 0; i < siblingItems.length; i++) {
                            siblingItems[i].classList.remove('selected');
                        }

                        currentClasses.add('selected');
                        currentLabel.innerText = this.innerText;
                        currentLabel.style.color = '#000';
                    }

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


                    sum.innerText = globalPrice.calculate();
                    currentListClasses.remove('visible');


                });
            }
        });
    }

    transportCheckBox.addEventListener("click", function() {
        var currentPrice = this.dataset.transportPrice;

        if (transportCheckBox.checked) {

            globalPrice.transportPrice = parseInt(currentPrice);
            transportSpan.innerText = 'Transport';
            transportPrice.innerText = currentPrice;

        } else {
            globalPrice.transportPrice = 0;
            transportSpan.innerText = '';
            transportPrice.innerText = '';
        }

        sum.innerText = globalPrice.calculate();
    });
});
