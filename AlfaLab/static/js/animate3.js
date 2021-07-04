
//$(document).ready(function() {
//const animItems = document.querySelector('._anim-items'); // elements for animation
document.addEventListener('DOMContentLoaded', function(){
function Element(element) {
    this.element = element;
}
    //    const ele1 = new Element(document.getElementsByClassName('price')) //.animateOnScroll('animate__fadeInRight', 'animate__fadeOutDown')
    const ele1 = new Element(document.getElementsByClassName('price')); //.animateOnScroll('animate__fadeInRight', 'animate__fadeOutDown')
    ele1.animateOnScroll('animate__fadeInRight', 'animate__fadeOutDown');
});

//function((document.getElementsByClassName('price')) {
//  window.addEventListener("scroll", animateOnScroll, {passive: true});
//});

console.log(document.getElementsByClassName('price'))

//Element(document.getElementsByClassName('price')).animateOnScroll('animate__fadeInRight', 'animate__fadeOutDown')
//window.addEventListener('scroll', animateOnScroll); // add an event when scrolling the browser window
window.addEventListener('scroll', function(Element) {
    Element.prototype.animateOnScroll = function(inEffect, outEffect) { // start animation when scrolling the browser window
    //        for (let index = 0; index < animItems.length; index++) {
//            const animItem = animItems[index]; // element for animation
            const animItem = this.element[0];
            animItem.style.opacity = "0";
            const animItemHeight = animItem.offsetHeight; // element height
            const animItemOffset = getElementOffset(animItem).top; // get the top offset of an element
            const animStart = 4; // 4 = 1/4 of the height of the animated element or
            // 1/4 of the browser window height if the element height is larger than the browser window

            let animItemPoint = window.innerHeight - animItemHeight / animStart; // animation start point
            if (animItemHeight > window.innerHeight) { // check if the element is greater than browser height
                animItemPoint = window.innerHeight - window.innerHeight / animStart; // animate an element
            }

            // if scrolled more than the position of the element minus the animation start point
            // and scrolled less than the position of the element plus its height
            if ((pageYOffset > (animItemOffset - animItemPoint)) &&
                pageXOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('animated'); // add class to animate the element
            } else {
                animItem.classList.remove('animated'); // remove class to disable element animation
            }
//        }
    }
    function getElementOffset(element) { // get the position of the element to the top or left
        const rect = element.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
});



// js addeventlistener on scroll prototype
// https://stackoverflow.com/questions/12522807/scroll-event-listener-javascript
