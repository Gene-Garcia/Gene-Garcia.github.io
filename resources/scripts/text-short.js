
// this is a function to cut the long abstract text
// and append a see more button
$(document).ready(function(){
    console.log($('.abstract'));
    $(".abstract").each(function(index, abstract){
        var abstractText = abstract.innerText;

        if (abstractText.length >= 300){
            var shortened = abstractText.substr(0,301).trim();
    
            // if the cut text does not end with .,
            // append three dots 
            if (!shortened.endsWith(".")){
                shortened += "...";
            }
            
            // add tool tip
            var seeMore = "<span class='see-more'>see more...</span>";
            $("#"+abstract.id).html(shortened + " " + seeMore);
        }
    });
});