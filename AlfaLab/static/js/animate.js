// example: 1 - in/out effects, 2 - only in effect
// document.querySelector('.price').animateOnScroll('animate__fadeInRight', 'animate__fadeOutDown');
// document.querySelector('.price').animateOnScroll('animate__fadeInRight');
(function() {
    HTMLElement.prototype.animateOnScroll = function(inEffect, outEffect=null) {
        this.classList.add('animate__animated');
        this.style.opacity = "0";
        const elementHeight = this.offsetHeight; // element height
        const windowHeight = window.innerHeight; // window height
        const elementOffset = this.offsetTop - windowHeight; // the position of the element from the bottom
        const animateStart = 20; // start playing animation of an element at a percentage of the screen from the bottom
        const windowPoint = window.innerHeight * animateStart / 100; // converting percentages to pixels
        console.log('scroll ' + (pageYOffset).toString())
        if ((pageYOffset > (elementOffset + windowPoint)) &&
            pageXOffset < (elementOffset + elementHeight)) {
            this.classList.add(inEffect);
            if (outEffect != null) {
                this.classList.remove(outEffect);
            }
            this.style.opacity = "1";
            console.log('> ' + (elementOffset + windowPoint).toString())
        } else {
            console.log('> ' + (elementOffset + windowPoint).toString())
            if (outEffect != null) {
                this.classList.add(outEffect);
                this.classList.remove(inEffect);
                this.style.opacity = "1";
            }
        }
    }
})();
