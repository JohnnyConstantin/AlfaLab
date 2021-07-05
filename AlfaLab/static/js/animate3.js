(function() {
    HTMLElement.prototype.animateOnScroll = function(inEffect, outEffect) {
        this.classList.add('animate__animated');
        const elementHeight = this.offsetHeight;
        const elementOffset = this.offsetTop;
        const elementOffsetFix = -300; // fix position of the animated element in pixels
        // TODO: fix in percentage
        // TODO: what to do if element greater than window
//        let animItemPoint = window.innerHeight - animItemHeight / animStart; // animation start point
//        let animItemPoint = window.innerHeight + elementOffsetFix; // animation start point
//        if (elementHeight > window.innerHeight) { // check if the element is greater than browser height
//            animItemPoint = window.innerHeight - window.innerHeight / elementOffsetFix; // animate an element
//        }
        console.log('window ' + (window.innerHeight).toString())
        console.log('page ' + (pageYOffset).toString())
        if ((pageYOffset > (elementOffset - elementHeight + elementOffsetFix)) &&
            pageXOffset < (elementOffset + elementHeight)) {
            this.classList.add(inEffect);
            this.classList.remove(outEffect);
            this.style.opacity = "1";
            console.log('> ' + (elementOffset - elementHeight + elementOffsetFix).toString())
        } else {
            console.log('> ' + (elementOffset - elementHeight + elementOffsetFix).toString())
            this.classList.add(outEffect);
            this.classList.remove(inEffect);
            this.style.opacity = "1";
        }
    }
})();

document.addEventListener('scroll', function() {
    document.querySelector('.price').animateOnScroll('animate__fadeInRight', 'animate__fadeOutDown');
});
