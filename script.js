const email = document.getElementById("mail");
const emailError = document.querySelector("span.email-error");
const psw = document.getElementById("psw");
const pswError = document.querySelector("span.psw-error");
const confpsw = document.getElementById("cpsw");
const cpswError = document.querySelector("span.cpsw-error")


email.value = "";

function showEmailError() {
    if (email.validity.valueMissing) {
        emailError.textContent = "You need to enter an email address";
        email.className = "";
    } else if (email.validity.typeMisMatch) {
        emailError.textContent = "You need to enter a valid email address";
        email.classList.add("invalid");
    } else if(email.validity.tooShort) {
        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}`;
        email.classList.add("invalid");
    }
}

email.addEventListener("focusout", (event) => {
    if(email.validity.valid) {
        emailError.textContent = "";
    }else{
        showEmailError();
    }
})

psw.addEventListener("focusout", (event) => {
    const pswValue = psw.value;
    validatePassword(pswValue);
});

confpsw.addEventListener("focusout", (event) => {
    checkPassword(confpsw.value, psw.value);
})

function validatePassword(password) {
    const pswRegExp = /^(?=.*\d)(?=.*[A-Z])(?=.*\W).{8,24}$/;
    const isValid = pswRegExp.test(password);

    psw.className = "";
  
    if (isValid) {
      pswError.textContent = "";
      psw.className = "valid";
    } else {
      let message = "Password must contain: ";
      if (!/\d/.test(password)) message += "at least one number ";
      if (!/[A-Z]/.test(password)) message += "at least one uppercase letter";
      if (!/\W/.test(password)) message += "at least one special character ";
      if (password.length <= 8 || password.length >= 24) message += "between 8 and 24 characters";
      pswError.textContent = message;
      psw.className = "invalid";
    }
  }


function checkPassword(cpsw, psw) {
    if (cpsw === psw) {
        cpswError.textContent = "";
        confpsw.className = "valid";
    } else {
        cpswError.textContent = "passwords doesn't match";
        confpsw.className = "invalid";
    }
}


