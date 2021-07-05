(function() {
    HTMLElement.prototype.animateOnScroll = function(inEffect, outEffect) { // start animation when scrolling the browser window
        this.style.opacity = "0";
        this.classList.add('animate__animated'); // add class to animate the element
        const animItemHeight = this.offsetHeight; // element height
        let animItemOffset = getElementOffset(this).top - animItemHeight;
//        if (this.classList.contains(outEffect)) { // fix for height when element is invisible
//            animItemOffset = getElementOffset(this).top - animItemHeight; // get the top offset of an element
//        } else {
//            animItemOffset = getElementOffset(this).top + animItemHeight; // get the top offset of an element
//        }
        const animStart = 1; // 4 = 1/4 of the height of the animated element or
        // 1/4 of the browser window height if the element height is larger than the browser window

        let animItemPoint = window.innerHeight - animItemHeight / animStart; // animation start point
        if (animItemHeight > window.innerHeight) { // check if the element is greater than browser height
            animItemPoint = window.innerHeight - window.innerHeight / animStart; // animate an element
        }

        console.log('height ' + (animItemHeight).toString())
        console.log('offset ' + (animItemOffset).toString())
        console.log('page ' + (pageYOffset).toString())
        console.log('> ' + (animItemOffset - animItemPoint).toString())
        console.log('< ' + (animItemOffset + animItemHeight).toString())
        // if scrolled more than the position of the element minus the animation start point
        // and scrolled less than the position of the element plus its height
//        if (pageYOffset < animItemOffset - animItemPoint) {
//            animItemOffset = getElementOffset(this).top - animItemHeight; // get the top offset of an element
//        }
        if ((pageYOffset > (animItemOffset - animItemPoint)) &&
            pageXOffset < (animItemOffset + animItemHeight)) {
            this.classList.add(inEffect); // add class to animate the element
            this.classList.remove(outEffect); // remove class to disable element animation
            this.style.opacity = "1";
//            animItemOffset = getElementOffset(this).top - animItemHeight;
        }
        if (pageYOffset < (animItemOffset - animItemPoint + animItemHeight)) {
            this.classList.add(outEffect); // add class to animate the element
            this.classList.remove(inEffect); // remove class to disable element animation
            this.style.opacity = "1";
//            animItemOffset = getElementOffset(this).top + animItemHeight;
        }
    }
    function getElementOffset(element) { // get the position of the element to the top or left
        const rect = element.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
})();

//$(document).ready(function() {
//const animItems = document.querySelector('._anim-items'); // elements for animation
//    $(".header").animated("animate__fadeInUp", "animate__fadeOutDown");
document.addEventListener('scroll', function(){

    //    const ele1 = new Element(document.getElementsByClassName('price')) //.animateOnScroll('animate__fadeInRight', 'animate__fadeOutDown')
//    const ele1 = new Element(document.querySelector('.price')); //.animateOnScroll('animate__fadeInRight', 'animate__fadeOutDown')
//    ele1.animateOnScroll('animate__fadeInRight', 'animate__fadeOutDown');
//var element = document.createElement('p');
//element.animateOnScroll('animate__fadeInRight', 'animate__fadeOutDown');
//document.querySelector('.price').animateOnScroll('animate__fadeInRight', 'animate__fadeOutDown');

//    document.querySelector.dispatchEvent(new Event("animateOnScroll"))
//    document.querySelector('.price').addEventListener('scroll', animateOnScroll('animate__fadeInRight', 'animate__fadeOutDown'));
document.querySelector('.price').animateOnScroll('animate__fadeInRight', 'animate__fadeOutDown');
});
//    document.querySelector('.price').addEventListener('scroll', animateOnScroll('animate__fadeInRight', 'animate__fadeOutDown'));


// js addeventlistener on scroll prototype
// https://stackoverflow.com/questions/12522807/scroll-event-listener-javascript
