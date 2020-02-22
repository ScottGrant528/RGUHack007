//Function is called when the button is pressed
function buttonPressed(){
    addToDialogBox(document.getElementById("inputBox").value);
    updateImage(newImageSrc);
};

//Pass it a string and it adds the string to the dialog box and it creates a new line for each input
function addToDialogBox(str) {
    document.getElementById("dialogBox").innerHTML += (str+"<br>");
    document.getElementById("inputBox").value = "";
};

//Updates the title image pass it the src to the new image
function updateImage(newImageSrc) {
    document.getElementById("img").src = newImageSrc;
};


