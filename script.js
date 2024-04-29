const email = document.getElementById("mail");
const emailError = document.querySelector("span.email-error");

email.value = "";

email.addEventListener("focusout", (event) => {
    if(email.validity.valid) {
        emailError.textContent = "";
        emailError.className = "error";
    }else{
        showEmailError();
    }
})


function showEmailError(){
    if (email.validity.valueMissing) {
        emailError.textContent = "You need to enter an email address";        
    } else if (email.validity.typeMisMatch) {
        emailError.textContent = "You need to enter a valid email address";
    } else if(email.validity.tooShort) {
        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}`;
    }
}