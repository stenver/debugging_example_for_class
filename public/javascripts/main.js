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
    window.history.pushState(wiseWords, wiseWords, "/wise_words/" + newNumberOfWiseWords);
}

function sendAjaxRequest(currentNumberOfWiseWords){
    $.ajax({
        url: "/get_wise_words",
        data: { "current_number_of_wise_words": currentNumberOfWiseWords }
    }).success(function(wiseWords) {
        render_wise_words(wiseWords);
    });
}

function getMissingWiseWords(currentNumberOfWiseWords){
    for(var i = 0; i < currentNumberOfWiseWords; i++){
        sendAjaxRequest(currentNumberOfWiseWords)
    }
}

$("#button").click(function(){
    currentNumberOfWiseWords = getCurrentNumberOfWiseWords();
    sendAjaxRequest(currentNumberOfWiseWords);
});

window.onload=function(){
    var currentNumberOfWiseWords = getCurrentNumberOfWiseWords();
    if(parseInt(currentNumberOfWiseWords) > 0){
        getMissingWiseWords(currentNumberOfWiseWords);
    };
};

window.onpopstate=function(data){
    var children = $("#container").children();
    var validChildFound = false;
    for(var i = 0; i < children.length; i++){
        if(validChildFound){
            children[i].remove()
        }
        else if(children[i].innerHTML === data.state){
            validChildFound = true;
        }
    }
    if(!validChildFound){
        sendAjaxRequest(children.length);
    }
}