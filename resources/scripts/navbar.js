window.onscroll = () => {


    if ($('#introduction-div').isInViewport()) {
        
        removeNavClasses();
        $('#nav-div .nav-link.introduction').addClass("active");

    } else if ($('#education-div').isInViewport()) {
        
        removeNavClasses();
        $('#nav-div .nav-link.education').addClass("active");

    } else if ($('#projects-div').isInViewport()) {
        
        removeNavClasses();
        $('#nav-div .nav-link.projects').addClass('active');

    } else if ($('#papers-div').isInViewport()) {
        
        removeNavClasses();
        $('#nav-div .nav-link.papers').addClass('active');

    } else if ($('#experiences-div').isInViewport()) {
        
        removeNavClasses();
        $('#nav-div .nav-link.experiences').addClass('active');

    } else if ($('#tech-stack-div').isInViewport()) {
        
        removeNavClasses();
        $('#nav-div .nav-link.tech-stack').addClass('active');

    }
};

// ref https://stackoverflow.com/questions/20791374/jquery-check-if-element-is-visible-in-viewport
$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
}


function removeNavClasses(){
    // removes only the "active" class from 
    // nav links that has active class
    $('#nav-div .nav-link.active').removeClass("active");
}
