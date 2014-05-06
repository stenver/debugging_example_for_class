/**
 * Created by stenver on 06/05/14.
 */

function getCurrentNumberOfWiseWords(){
    var urlParts = document.location.href.split("/");
    var currentNumberOfWisewords = urlParts[urlParts.length -1];
    if (currentNumberOfWisewords === ""){
        return 0;
    }
    return currentNumberOfWisewords
}

function render_wise_words(wiseWords){
    $("#container").append("<div>" + wiseWords + "</div>");
    var newNumberOfWiseWords =  parseInt(getCurrentNumberOfWiseWords()) + 1;
    window.history.pushState(wiseWords, wiseWords, newNumberOfWiseWords);
}

function sendAjaxRequest(){
    $.ajax({
        url: "/get_wise_words",
        data: { "current_number_of_wise_words": getCurrentNumberOfWiseWords() }
    }).success(function(wiseWords) {
        render_wise_words(wiseWords);
        console.log(wiseWords)
    });
}

$("#button").click(function(){
    sendAjaxRequest();
});