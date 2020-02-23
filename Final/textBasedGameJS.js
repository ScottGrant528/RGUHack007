

function init(){
var input = document.getElementById("inputBox")
input.addEventListener("keyup",function(event){
    var key = (event.keyCode);
    if (key == 16){
        pressed = true;
        buttonPressed();
    }
});
}


//Function is called when the button is pressed
function buttonPressed(){
    var input = document.getElementById("inputBox").value.toLowerCase();
    addToDialogBox(input);
    getAction(input);
    updateImage(newImageSrc);
    alert(document.onkeyup)
    return input;
};


//Pass it a string and it adds the string to the dialog box and it creates a new line for each input
function addToDialogBox(str) {
    $("#dialogBox").append(str + "<br>");
    $("#dialogBox").scrollTop($("#dialogBox")[0].scrollHeight);
    document.getElementById("inputBox").value = "";
};

//Updates the title image pass it the src to the new image
function updateImage(newImageSrc) {
    document.getElementById("img").src = newImageSrc;
};



