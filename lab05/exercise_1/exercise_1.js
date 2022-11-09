success_message = document.getElementById("success");
fail_message = document.getElementById("fail");
short_message = document.getElementById("short");
success_message.style.display = "none";
fail_message.style.display = "none";
short_message.style.display = "none";

function validate() {
    success_message.style.display = "none";
    fail_message.style.display = "none";
    short_message.style.display = "none";

    var password1 = document.getElementById("password1");
    var password2 = document.getElementById("password2");   
    var result;    
  
    if(password1.value != password2.value) {
        fail_message.style.display = "block";
        alert("Passwords do not match. Please try again.");
    }
    else if(password1.value.length <= 8) {
        short_message.style.display = "block";
        alert("Password must be at least 8 characters long. Please try again.");
    }
    else {
        success_message.style.display = "block";
    }


    document.getElementById("password1").value.reset();
    document.getElementById("password2").value.reset();
}