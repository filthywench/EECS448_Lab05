
var image = document.getElementById("pic");

arr = ["images/1_laying.jpg", "images/2_hearts.jpg", "images/3_jumping.jpg", "images/4_barking.jpg", "images/5_dancing.jpg"]

var counter = 0;

function nextImage() {
    // var image = document.getElementById("pic");
    // image.src = arr[1];

    if(counter==4){
        counter = 0;
    }
    else {
        counter++;
    }

    image.src = arr[counter];

}

function previousImage() {

    if(counter == 0) {
        counter = 4;
    }
    else {
        counter--;
    }

    image.src = arr[counter];
}