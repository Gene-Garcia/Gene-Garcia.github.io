
// this is a function to cut the long abstract text
// and append a see more button

$(document).ready(function(){
    $(".paper-container").each(function(index, paper){
        const abstract = paper.getElementsByClassName('abstract');
        const paperTitle = paper.getElementsByClassName('paper-title')[0].innerText;
        let abstractText = abstract[0].innerText;

        if (abstractText.length >= 300){
            let shortened = abstractText.substr(0,301).trim();
    
            // if the cut text does not end with .,
            // append three dots 
            if (!shortened.endsWith(".")){
                shortened += "...";
            }
            
            // add tool tip
            let seeMore = `<a class='see-more' data-bs-toggle="modal" data-bs-target="#abstractModal" onclick="loadModal('${paperTitle}', '${abstractText}')">see more...</a>`;
            $("#"+abstract[0].id).html(shortened + " " + seeMore);
        }
    });
});

function loadModal(title, abstract){
    console.log(title);
    console.log(abstract);

    // change title
    $('.modal #abstractModalLabel').html(title);

    // change modal body
    $('.modal #abstract-body').html(abstract);

}