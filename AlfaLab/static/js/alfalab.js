// apply settings to an element on page load before scrolling starts for a better visual effect
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.why-us').animateOnScroll('animate__fadeInRight', 'animate__fadeOutDown');
    document.querySelector('.price').animateOnScroll('animate__fadeInRight', 'animate__fadeOutDown');

});
// applying animation to an element when scrolling
document.addEventListener('scroll', function() {
    document.querySelector('.why-us').animateOnScroll('animate__fadeInRight', 'animate__fadeOutDown');
    document.querySelector('.price').animateOnScroll('animate__zoomIn', 'animate__fadeOutDown');
    //    document.querySelector('.price').animateOnScroll('animate__fadeInRight');
});

$(document).ready(function() {
//    $(".header").animated("animate__fadeInUp", "animate__fadeOutDown");
//    $(".box").animated("animate__fadeInRight", "animate__fadeOutDown");
//    $(".why-us").animated("animate__zoomIn", "animate__fadeOutDown");
//    $(".why-us-content").animated("animate__fadeInRight", "animate__fadeOutDown");
//    $(".container").animated("animate__fadeInRight", "animate__fadeOutDown");
});

$(window).load(function() {
//	$(".loader_inner").fadeOut();
//	$(".loader").delay(400).fadeOut("slow");
//	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
//	$(".top_text p").animated("fadeInUp", "fadeOutDown");
});
