$(document).ready(function() {
    var scrollLink = $('.scroll');

    // Smooth scrolling
    scrollLink.click(function(event) {
        event.preventDefault();
        $('body,html').animate({
            // How far away from the top is the hash
            scrollTop: $(this.hash).offset().top
        }, 1000)
    })

})