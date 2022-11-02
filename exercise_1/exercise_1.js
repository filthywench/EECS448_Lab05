// submit_button = document.getElementById("submit_button");
// password1 = document.getElementById("password1");
// password2 = document.getElementById("password2");

success_message = document.getElementById("success");
fail_message = document.getElementById("fail");
short_message = document.getElementById("short");
success_message.style.display = "none";
fail_message.style.display = "none";
short_message.style.display = "none";

// success_message.hidde

function validate() {
    // document.getElementById("form").submit();  
    // submit_button = document.getElementById("submit_button");

    success_message.style.display = "none";
    fail_message.style.display = "none";
    short_message.style.display = "none";

    var password1 = document.getElementById("password1");
    var password2 = document.getElementById("password2");   
    var result;
    // alert_message = document.getElementById("alert_message") 
    
    if (password1.value == password2.value) {
        if(password1.value.length < 8){
            short_message.style.display = "block";
        }
        else {
            success_message.style.display = "block";
        }
        
        // result = success_message;
    }
    else {
        fail_message.style.display = "block";
    }

    document.getElementById("password1").value.reset();
    document.getElementById("password2").value.reset();

    // return result;
}