var emailArray = [];
var passwordArray = [];
var usernameArray = [];

const check = / ^ [a - zA - Z0 - 9.!#$ % & '*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/


function register() {

    var username = document.getElementById("rum").value;
    var email = document.getElementById("re").value;
    var password = document.getElementById("rp").value;
    var passwordRetype = document.getElementById("rrp").value;

    if (password != passwordRetype) {
        alert("Password don't match retype your Password.");

    } else if (emailArray.indexOf(email) == -1) {
        emailArray.push(email);
        passwordArray.push(password);

        alert(username + "  Thanks for registration. \nTry to login Now");

        document.getElementById("re").value = "";
        document.getElementById("rp").value = "";
        document.getElementById("rrp").value = "";
    } else {
        alert(email + " is already register.");
        return;
    }
}

function login() {
    event.preventDefault();

    var email = document.getElementById("le").value;
    var password = document.getElementById("lp").value;

    var i = emailArray.indexOf(email);

    if (emailArray.indexOf(email) == -1) {
        if (email == "") {
            alert("Email required.");
            return;
        }
        alert("Email does not exist.");
        return;
    } else if (passwordArray[i] != password) {
        if (password == "") {
            alert("Password required.");
            return;
        }
        alert("Password does not match.");
        return;
    } else {
        alert(email + " yor are login Now \n welcome to our website.");

        document.getElementById("se").value = "";
        document.getElementById("sp").value = "";
        return;
    }

}


function forgot() {
    event.preventDefault();

    var email = document.getElementById("fe").value;

    if (emailArray.indexOf(email) == -1) {
        if (email == "") {
            alert("Email required.");
            return;
        }
        alert("Email does not exist.");
        return;
    }

    alert("email is send to your email check it in 24hr. \n Thanks");
    document.getElementById("fe").value = "";
}