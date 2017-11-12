/**
 * @function switchClass
 * Removes specified class from all given node element collections and adds this class to given element from this collection
 * @param {string} classString -name of class
 * @param {object} elements - collection of elements the class is removed from
 */
function switchClass(classString, currentElement, elements) {
    [].forEach.call(elements, function(element) {
        element.classList.remove(classString)
    });

    currentElement.classList.add(classString);

}


/**
* @function cloneInnerTextTo()
* Clones innerText of this to specified target
* @param {object} target - DOM object
*/
function cloneInnerTextTo(target) {
    target.innerText = this.innerText;
}

/**
* @function cloneInnerHTMLToText()
* Clones innerText of this and put it to specified target's innerHTML
* @param {object} target - DOM object
*/
function cloneInnerHTMLToText(target) {
    target.innerText = this.innerHTML;
}


/**
* @function removeClassFromMany
* removes specified class from many elements
* @param {string} classString - class
* @param {Array} elements - DOM object array
*/
function removeClassFromMany(classString, ...elements) {
    elements.forEach(function(el) {
        el.classList.remove(classString)
    })
}

/**
* @function toggleClassOnMany
* removes specified class on many elements
* @param {string} classString - class
* @param {Array} elements - DOM object array
*/
function toggleClassOnMany(classString, ...elements) {
    elements.forEach(function(el) {
        el.classList.toggle(classString)
    })
}




export {switchClass};
export {cloneInnerTextTo}
export {cloneInnerHTMLToText}
export {removeClassFromMany}
export {toggleClassOnMany}