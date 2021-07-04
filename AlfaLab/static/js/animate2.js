const animItems = document.querySelector('._anim-items'); // elements for animation

if (animItems.length > 0) { // check if elements exist
    window.addEventListener('scroll', animateOnScroll); // add an event when scrolling the browser window
    function animateOnScroll() { // start animation when scrolling the browser window
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index]; // element for animation
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
            if ((pageYOffset > animItemOffset - animItemPoint) &&
                pageXOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('animated'); // add class to animate the element
            } else {
                animItem.classList.remove('animated'); // remove class to disable element animation
            }
        }
    }
    function getElementOffset(element) { // get the position of the element to the top or left
        const rect = element.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
}
