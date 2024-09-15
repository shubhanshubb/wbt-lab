function validateform() {
    var username = document.myform.username.value;
    var password = document.myform.password.value;
    var phone = document.myform.phone.value;
    if (username == "" || username == null) {
    alert("Please Enter your username");
    document.myform.name.focus();
    document.myform.name.style.borderColor = "red";
    return false;
    }
    if (password == "" || password == null || password.length < 8) {
    alert("Please Enter your password");
    document.myform.email.focus();
    document.myform.name.style.borderColor = "red";
    return false;
    }
    if (phone == "" || phone == null) {
    alert("Please Enter your phone number");
    document.myform.query.focus();
    document.myform.name.style.borderColor = "red";
    return false;
    }
    }