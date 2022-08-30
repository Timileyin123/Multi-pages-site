                                                                                                                                                                                                        var nameError = getElementById("name-error");
var emailError = getElementById("email-error");
var subjectError = getElementById("subject-error");
var messageError = getElementById("message-error");
var submitError = getElementById("submit-error");

function validateName(){
    var name = getElementById("contact-name").value;
    
    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    if(!name.match(/^[A-Z a-z]*\s{1}[A-Z a-z]*$/)){
        nameError.innerHTML = "Write your full name";
        return false;
    }
    nameError.innerHTML = "valid";
    return true;
}