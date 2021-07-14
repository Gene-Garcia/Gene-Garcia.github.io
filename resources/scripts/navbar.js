window.onscroll = () => {
    var yScroll = window.scrollY;


    // bug
    // on smaller screen, y scroll proximity also must change

    if (yScroll >= 0 && yScroll < 939){
        // removeNavClasses first before adding active class
        // to introduction nav link
        // because the scroll is still in the area of introduction
        // introduction nav link must still have the active class,
        // having it first allows other classes with active class
        // to be removed, but re-adds it only to introduction
        removeNavClasses();
        $('#nav-div .nav-link.introduction').addClass("active");
    } else if (yScroll >= 939 && yScroll < 1900){
        removeNavClasses();
        $('#nav-div .nav-link.education').addClass("active");
    } else if (yScroll >= 1900 && yScroll < 3000){
        removeNavClasses();
        $('#nav-div .nav-link.projects').addClass('active');
    } else if (yScroll >= 300 && yScroll < 4700){
        removeNavClasses();
        $('#nav-div .nav-link.papers').addClass('active');
    } else if (yScroll >= 4700 && yScroll < 5535){
        removeNavClasses();
        $('#nav-div .nav-link.experiences').addClass('active');
    } else if (yScroll >= 5535){
        removeNavClasses();
        $('#nav-div .nav-link.tech-stack').addClass('active');
    }

};

function removeNavClasses(){
    // removes only the "active" class from 
    // nav links that has active class
    $('#nav-div .nav-link.active').removeClass("active");
}