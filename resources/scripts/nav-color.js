window.onscroll = () => {
    console.log(window.scrollY);

    var yScroll = window.scrollY;

    // so that if the y position does not meet the if statements
    // it will be set back to its default style
    removeNavClasses();

    if (yScroll >= 950 && yScroll < 1903){
        $('#nav-div').addClass("education");
    } else if (yScroll >= 1903 && yScroll < 4250){
        $('#nav-div').addClass('projects');
    } else if (yScroll >= 4250 && yScroll < 5841){
        $('#nav-div').addClass('papers');
    } else if (yScroll >= 5841 && yScroll < 7692){
        $('#nav-div').addClass('experience');
    } else if (yScroll >= 7692){
        $('#nav-div').addClass('skills');
    }


};

function removeNavClasses(){
    $('#nav-div').removeClass("education");
    $('#nav-div').removeClass("projects");
    $('#nav-div').removeClass("papers");
    $('#nav-div').removeClass("experience");
    $('#nav-div').removeClass("skills");
}