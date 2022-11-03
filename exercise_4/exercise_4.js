
var paragraph = document.getElementById("paragraph");

var border_red = document.getElementById("border_red");
var border_green = document.getElementById("border_green");
var border_blue = document.getElementById("border_blue");
var border_width = document.getElementById("border_width");

var bg_red = document.getElementById("bg_red");
var bg_green = document.getElementById("bg_green");
var bg_blue = document.getElementById("bg_blue");

function update() {

    // if(bg_red.value<=70 && bg_green.value<=70 && bg_blue<=70) {
    //     //font color = white
    //     paragraph.style.color = "rgb(255, 255, 255)";
    // }
    paragraph.style.backgroundColor ="rgb("+bg_red.value+", "+bg_green.value+", "+bg_blue.value+")";
    paragraph.style.border = border_width.value + "px solid rgb(" + border_red.value + ", " + border_green.value + ", " + border_blue.value + ")";

   
}