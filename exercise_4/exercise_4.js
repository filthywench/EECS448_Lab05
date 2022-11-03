
var paragraph = document.getElementById("paragraph")

var border_red = document.getElementById("border_red").value;
var border_green = document.getElementById("border_green").value;
var border_blue = document.getElementById("border_blue");
var border_width = document.getElementById("border_width");

var bg_red = document.getElementById("bg_red");
var bg_green = document.getElementById("bg_green");
var bg_blue = document.getElementById("bg_blue");

function update() {
    paragraph.style.backgroundColor = rgb(bg_red.value, bg_green.value, bg_blue.value);
    // paragraph.style.backgroundColor = "bg_red";
}